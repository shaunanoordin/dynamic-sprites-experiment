import ImageAsset from './ImageAsset'

const SPRITE_WIDTH = 12
const SPRITE_HEIGHT = 16

/*  Primary App Class
 */
//==============================================================================
export default class App {
  constructor (width = 160, height = 80) {
    this.html = {
      canvas: document.getElementById('canvas'),
      main: document.getElementById('main'),
      offscreenCanvas: new OffscreenCanvas(SPRITE_WIDTH, SPRITE_HEIGHT),  // Should fit size of Mario sprite
    }

    this.canvas2d = this.html.canvas.getContext('2d')
    this.canvasWidth = width
    this.canvasHeight = height
    this.offscreenCanvas2d = this.html.offscreenCanvas.getContext('2d')

    this.setupUI()

    this.initialised = false
    this.assets = {
      'mario': new ImageAsset('assets/mario.gif'),
    }

    this.transformTime = 0
    this.transformMax = 12000

    this.prevTime = null
    this.nextFrame = window.requestAnimationFrame(this.main.bind(this))
  }

  /*
  The main loop. Run a single frame of gameplay.
  - time: the current/total time (milliseconds) since the game started.
   */
  main (time) {
    const timeStep = (this.prevTime) ? time - this.prevTime : time
    this.prevTime = time

    if (this.initialised) {
      this.play(timeStep)
      this.paint()
    } else {
      this.initialisationCheck()
    }

    this.nextFrame = window.requestAnimationFrame(this.main.bind(this))
  }

  play (timeStep = 0) {
    this.transformTime = (this.transformTime + timeStep) % this.transformMax
  }

  paint () {
    const c2d = this.canvas2d
    const cOff = this.offscreenCanvas2d
    const img = this.assets.mario.img
    const htmlOffscreenCanvas = this.html.offscreenCanvas

    c2d.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
    c2d.fillStyle = '#ccc'
    c2d.fillRect(0, 0, this.canvasWidth, this.canvasHeight)

    function paintSmallMario () {
      const scale = 1
      const srcX = 6, srcY = 7
      const srcSizeX = SPRITE_WIDTH, srcSizeY = SPRITE_HEIGHT
      const tgtX = 0, tgtY = 0
      const tgtSizeX = srcSizeX * scale, tgtSizeY = srcSizeY * scale
      c2d.drawImage(img, srcX, srcY, srcSizeX, srcSizeY, tgtX, tgtY, tgtSizeX, tgtSizeY)
    }

    function paintBigMario () {
      const scale = 4
      const srcX = 6, srcY = 7
      const srcSizeX = SPRITE_WIDTH, srcSizeY = SPRITE_HEIGHT
      const tgtX = 12, tgtY = 0
      const tgtSizeX = srcSizeX * scale, tgtSizeY = srcSizeY * scale
      c2d.drawImage(img, srcX, srcY, srcSizeX, srcSizeY, tgtX, tgtY, tgtSizeX, tgtSizeY)
    }

    function paintInvertedMario () {
      c2d.save()
      c2d.globalCompositeOperation = 'exclusion'
      const scale = 1
      const srcX = 6, srcY = 7
      const srcSizeX = SPRITE_WIDTH, srcSizeY = SPRITE_HEIGHT
      const tgtX = 72, tgtY = 0
      const tgtSizeX = srcSizeX * scale, tgtSizeY = srcSizeY * scale
      c2d.drawImage(img, srcX, srcY, srcSizeX, srcSizeY, tgtX, tgtY, tgtSizeX, tgtSizeY)
      c2d.restore()
    }

    function paintRotatedMario (progress = 0.0) {
      const scale = 2
      const srcX = 6, srcY = 7
      const srcSizeX = SPRITE_WIDTH, srcSizeY = SPRITE_HEIGHT
      const tgtX = 108, tgtY = 24
      const tgtSizeX = srcSizeX * scale, tgtSizeY = srcSizeY * scale

      c2d.translate(tgtX, tgtY)
      c2d.rotate(Math.PI * 2 * progress)
      c2d.drawImage(
        img,
        srcX, srcY, srcSizeX, srcSizeY,
        tgtSizeX / -2, tgtSizeY / -2,  // Paint sprite, centred on 0,0
        tgtSizeX, tgtSizeY
      )
      c2d.resetTransform()
      // c2d.setTransform(1, 0, 0, 1, 0, 0)
    }

    function paintHuedMario (progress = 0.0) {
      c2d.save()
      const scale = 1
      const srcX = 6, srcY = 7
      const srcSizeX = SPRITE_WIDTH, srcSizeY = SPRITE_HEIGHT
      const tgtX = 72, tgtY = 24
      const tgtSizeX = srcSizeX * scale, tgtSizeY = srcSizeY * scale

      c2d.filter = `hue-rotate(${progress * 360}deg)`
      c2d.drawImage(img, srcX, srcY, srcSizeX, srcSizeY, tgtX, tgtY, tgtSizeX, tgtSizeY)
      c2d.restore()
    }

    function paintLuigi () {
      c2d.save()
      cOff.save()

      const scale = 1
      const srcX = 6, srcY = 7
      const srcSizeX = SPRITE_WIDTH, srcSizeY = SPRITE_HEIGHT
      const tgtX = 72, tgtY = 48
      const tgtSizeX = srcSizeX * scale, tgtSizeY = srcSizeY * scale

      // Draw Mario to offscreen canvas
      cOff.drawImage(img, srcX, srcY, srcSizeX, srcSizeY, 0, 0, srcSizeX, srcSizeY)

      // Modify the Mario sprite on the offscreen canvas
      // Go pixel by pixel, transforming red pixels into green, therefore
      // transforming Mario into Luigi.
      const offImage = cOff.getImageData(0, 0, SPRITE_WIDTH, SPRITE_HEIGHT)
      const offData = offImage?.data
      const dataLength = offData?.length || 0
      for (let i = 0 ; i < dataLength ; i += 4) {
        const r = offData[i + 0]
        const g = offData[i + 1]
        const b = offData[i + 2]
        const a = offData[i + 3]
        if (g > r && g > b) {  // Transform green pixels -> transparent
          offData[i + 0] = 0
          offData[i + 1] = 0
          offData[i + 2] = 0
          offData[i + 3] = 0
        } else if (r > (g+b) * 2) {  // Transform red pixels -> green
          offData[i + 0] = 64
          offData[i + 1] = 192
          offData[i + 2] = 96
          offData[i + 3] = a
        }
      }
      cOff.putImageData(offImage, 0, 0)

      // Draw the modified sprite (on the offscreen canvas) on to the main canvas
      c2d.drawImage(htmlOffscreenCanvas, 0, 0, srcSizeX, srcSizeY, tgtX, tgtY, tgtSizeX, tgtSizeY)

      c2d.restore()
      cOff.restore()
      cOff.clearRect(0, 0, SPRITE_WIDTH, SPRITE_HEIGHT)
    }

    const progress = this.transformTime / this.transformMax
    paintSmallMario()
    paintBigMario()
    paintInvertedMario()
    paintRotatedMario(progress)
    paintHuedMario(progress)
    paintLuigi()

  }

  initialisationCheck () {
    // Assets check
    let allAssetsReady = true
    let numReadyAssets = 0
    let numTotalAssets = 0
    Object.keys(this.assets).forEach((id) => {
      const asset = this.assets[id]
      allAssetsReady = allAssetsReady && asset.ready
      if (asset.ready) numReadyAssets++
      numTotalAssets++
    })

    if (allAssetsReady) {
      // Let's go!
      this.initialised = true
    }
  }

  setupUI () {
    this.html.canvas.width = this.canvasWidth
    this.html.canvas.height = this.canvasHeight
    this.canvas2d.imageSmoothingEnabled = false  /* Allow sprite art to be scaled up in drawImage() */

    if (window.PointerEvent) {
      this.html.canvas.addEventListener('pointerdown', this.onPointerDown.bind(this))
      this.html.canvas.addEventListener('pointermove', this.onPointerMove.bind(this))
      this.html.canvas.addEventListener('pointerup', this.onPointerUp.bind(this))
      this.html.canvas.addEventListener('pointercancel', this.onPointerUp.bind(this))
    } else {
      this.html.canvas.addEventListener('mousedown', this.onPointerDown.bind(this))
      this.html.canvas.addEventListener('mousemove', this.onPointerMove.bind(this))
      this.html.canvas.addEventListener('mouseup', this.onPointerUp.bind(this))
    }

    // Prevent "touch and hold to open context menu" menu on touchscreens.
    this.html.canvas.addEventListener('touchstart', stopEvent)
    this.html.canvas.addEventListener('touchmove', stopEvent)
    this.html.canvas.addEventListener('touchend', stopEvent)
    this.html.canvas.addEventListener('touchcancel', stopEvent)

    this.html.main.addEventListener('keydown', this.onKeyDown.bind(this))
    this.html.main.addEventListener('keyup', this.onKeyUp.bind(this))

    // window.addEventListener('resize', this.updateUI.bind(this))
    // this.updateUI()

    this.html.main.focus()
  }

  onPointerDown (e) { return stopEvent(e) }
  onPointerMove (e) { return stopEvent(e) }
  onPointerUp (e) { return stopEvent(e) }
  onKeyDown (e) {}
  onKeyUp (e) {}

}

function getEventCoords (event, element) {
  const xRatio = (element.width && element.offsetWidth) ? element.width / element.offsetWidth : 1
  const yRatio = (element.height && element.offsetHeight) ? element.height / element.offsetHeight : 1

  const x = event.offsetX * xRatio
  const y = event.offsetY * yRatio
  return { x, y }
}

function stopEvent (e) {
  if (!e) return false
  e.preventDefault && e.preventDefault()
  e.stopPropagation && e.stopPropagation()
  e.returnValue = false
  e.cancelBubble = true
  return false
}
//==============================================================================
