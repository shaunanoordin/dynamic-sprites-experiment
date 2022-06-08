import ImageAsset from './ImageAsset'

/*  Primary App Class
 */
//==============================================================================
export default class App {
  constructor (width = 160, height = 80) {
    this.html = {
      canvas: document.getElementById('canvas'),
      main: document.getElementById('main'),
    }

    this.canvas2d = this.html.canvas.getContext('2d')
    this.canvasWidth = width
    this.canvasHeight = height

    this.setupUI()

    this.initialised = false
    this.assets = {
      'mario': new ImageAsset('assets/mario.gif'),
    }

    this.rotatedMario_rotationTime = 0
    this.rotatedMario_rotationMax = 12000

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
    this.rotatedMario_rotationTime = (this.rotatedMario_rotationTime + timeStep) % this.rotatedMario_rotationMax
  }

  paint () {
    const c2d = this.canvas2d
    const camera = this.camera
    const img = this.assets.mario.img

    c2d.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
    c2d.fillStyle = '#ccc'
    c2d.fillRect(0, 0, this.canvasWidth, this.canvasHeight)

    function paintSmallMario () {
      const scale = 1
      const srcX = 6, srcY = 7
      const srcSizeX = 12, srcSizeY = 16
      const tgtX = 0, tgtY = 0
      const tgtSizeX = srcSizeX * scale, tgtSizeY = srcSizeY * scale
      c2d.drawImage(img, srcX, srcY, srcSizeX, srcSizeY, tgtX, tgtY, tgtSizeX, tgtSizeY)
    }

    function paintBigMario () {
      const scale = 4
      const srcX = 6, srcY = 7
      const srcSizeX = 12, srcSizeY = 16
      const tgtX = 12, tgtY = 0
      const tgtSizeX = srcSizeX * scale, tgtSizeY = srcSizeY * scale
      c2d.drawImage(img, srcX, srcY, srcSizeX, srcSizeY, tgtX, tgtY, tgtSizeX, tgtSizeY)
    }

    function paintInvertedMario () {
      c2d.save()
      c2d.globalCompositeOperation = 'exclusion'
      const scale = 1
      const srcX = 6, srcY = 7
      const srcSizeX = 12, srcSizeY = 16
      const tgtX = 72, tgtY = 0
      const tgtSizeX = srcSizeX * scale, tgtSizeY = srcSizeY * scale
      c2d.drawImage(img, srcX, srcY, srcSizeX, srcSizeY, tgtX, tgtY, tgtSizeX, tgtSizeY)
      c2d.restore()
    }

    function paintRotatedMario (progress) {
      c2d.save()
      const scale = 1
      const srcX = 6, srcY = 7
      const srcSizeX = 12, srcSizeY = 16
      const tgtX = 96, tgtY = 16
      const tgtSizeX = srcSizeX * scale, tgtSizeY = srcSizeY * scale

      c2d.translate(tgtX, tgtY)
      c2d.rotate(Math.PI * 2 * progress)
      c2d.drawImage(
        img,
        srcX, srcY, srcSizeX, srcSizeY,
        tgtSizeX / -2, tgtY / -2,  // Paint sprite, centred on 0,0
        tgtSizeX, tgtSizeY
      )
      c2d.restore()
    }

    paintSmallMario()
    paintBigMario()
    paintInvertedMario()
    paintRotatedMario(this.rotatedMario_rotationTime / this.rotatedMario_rotationMax)

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
