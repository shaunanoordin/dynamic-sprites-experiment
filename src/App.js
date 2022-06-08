import ImageAsset from "./ImageAsset"

/*  Primary App Class
 */
//==============================================================================
export default class App {
  constructor() {
    this.initialised = false
    this.assets = {
      "exampleImage": new ImageAsset('assets/simple-bg.png'),
    }

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

  play (timeStep = 0) {}

  paint () {}

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
}
//==============================================================================
