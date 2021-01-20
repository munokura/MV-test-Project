(() => {
    "use strict";

    Scene_Gameover.prototype.start = function () {
        Scene_Base.prototype.start.call(this);
        // this.startFadeIn(this.slowFadeSpeed(), false);
    };

    Scene_Map.prototype.stop = function () {
        Scene_Base.prototype.stop.call(this);
        $gamePlayer.straighten();
        this._mapNameWindow.close();
        if (this.needsSlowFadeOut()) {
            // this.startFadeOut(this.slowFadeSpeed(), false);
        } else if (SceneManager.isNextScene(Scene_Map)) {
            this.fadeOutForTransfer();
        } else if (SceneManager.isNextScene(Scene_Battle)) {
            this.launchBattle();
        }
    };

})();
