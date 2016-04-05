# Anim
Tiny animation utility for blaze  _uihooks using VelocityJS

Anim wraps velocity, and provides a configurable convinence function for animating with `_uihooks` in meteor blaze templates._



## Install
Simply install the package via atmosphere

```sh
meteor add pushplaybang:anim
```



## Usage
First, create a new instance of anim:

```js
App.Ui.Animation = new Anim();
```

Then in an onRendered callback

```js
Template.topicList.onRendered(function() {
  var instance = this;
  instance.parent = this.find('.list');

  // add node animation via _uihooks
  instance.parent._uihooks = {
    insertElement: function (node, next) {
      App.Ui.Animation.animate({
        parent: instance.parent,
        node: node,
        next: next,
        duration: 650,
        mode: 'insert',
        custom: {
          opacity: [1, 0],
        }
      });
    },
  };
});
```

heres an example with the `removeElement` hook:

```js
removeElement: function(node) {
  App.Ui.Animation.animate({
    parent: instance.singleView,
    node: node,
    duration: 650,
    mode: 'remove',
    custom: {
      opacity: 0,
    }
  });
}
```



### Notes: 

* The mode options can be either `insert` or `remove`.
* custom animation should fit the syntax defined by [velocityjs](http://julian.com/research/velocity/)
* alternatively, a simple `fadein` or `fadeout` can be passed to an `animation` property in its place.



### Contributions and Suggestions Welcome!
Have something you think this needs or could use as an improvement, let me know.  add [an issue on github](https://github.com/Pushplaybang/meteor-anim) or fork and create a pull request.



____


### License [MIT](https://opensource.org/licenses/MIT)
Copyright (c) 2016 Paul van Zyl

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.