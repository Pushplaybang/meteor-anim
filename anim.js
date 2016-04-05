/**
 * re-usable and configurable animation functions to be used with
 * Blaze ui hooks for animating nodes in and out.
 */
Anim = function() {
  /* Default animations */
  this.animations = {
    fadein: {
      opacity: [ 1, 0],
    },
    fadeout: {
      opacity: 0
    }
  };

  /* Fallback duration */
  this.fallbackDuration = 500;

  // determin whether we're using a custom animation or selection from the list
  this._defaultAnim = function(args) {
    if (args.custom && Object.hasOwnProperty(args.custom).length !== 0)
      return args.custom;

    if (args.animation && args.animation.length > 0)
      return this.animations[args.animation];

     return false;
  };

  // handle the element, inserting it if appropriate
  this._handleElement = function(args) {
    if (args.mode && args.mode === 'insert')
      return args.parent.insertBefore(args.node, args.next);

    return args.node;
  };

  /*
    transition a child element in
    args: parent, node, next, duration, mode, animation, custom, callback
  */
  this.animate = function(args) {
    // determine the animation
    var animation = this._defaultAnim(args);

    // get the selector (and DOM insertion)
    var el = this._handleElement(args);

    // Stop any current animation
    $.Velocity(args.node, "stop");

    // animate
    $.Velocity(el, animation, {
      duration:  args.duration || this.fallbackDuration,
      complete: function() {
        if (args.mode && args.mode === 'remove')
          $(this).remove();

        if (args.callback && typeof(args.callback) === 'function')
          callback();
      }
    });
  };
};
