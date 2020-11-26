/*
 * --------------------------------------------------
 * MNKR_templete Ver.1.0.1
 * Copyright (c) 2020 Munokura
 * This software is released under the MIT license.
 * http://opensource.org/licenses/mit-license.php
 * --------------------------------------------------
 */

/*:
 * @target MV
 * @url https://raw.githubusercontent.com/munokura/MNKR-MZ-plugins/master/MNKR_templete.js
 * @plugindesc 
 * @author munokura
 *
 * @help
 * 利用規約:
 *   MITライセンスです。
 *   https://licenses.opensource.jp/MIT/MIT.html
 *   作者に無断で改変、再配布が可能で、
 *   利用形態（商用、18禁利用等）についても制限はありません。
 */

(() => {
  "use strict";

(()=>{
    'use strict'
   
    Sprite_Damage.prototype.createDigits = function(baseRow, value) {
        var string = Math.abs(value).toString();
        var row = baseRow + (value < 0 ? 1 : 0);
        var w = this.digitWidth();
        var h = this.digitHeight();
        for (var i = 0; i < string.length; i++) {
            var sprite = this.createChildSprite();
            var n = Number(string[i]);
            sprite.setFrame(n * w, row * h, w, h);
            sprite.x = (i - (string.length - 1) / 2) * w;
            // sprite.dy = -i;
            sprite.dy = 0;
        }
    };
})();

})();