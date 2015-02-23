$.Velocity.RegisterEffect('transition.pushRightIn', {
  defaultDuration: 500,
  calls: [
    [
      {
        translateX: ['0%', '100%'],
        translateZ: 0,
        easing: "ease-in-out",
        opacity: [1, 1]
      }
    ]
  ]
});

$.Velocity.RegisterEffect('transition.pushLeftOut', {
  defaultDuration: 500,
  calls: [
    [
      {
        translateX: ['-100%', '0%'],
        translateZ: 0,
        easing: "ease-in-out",
        opacity: [1, 1]
      }
    ]
  ]
});

$.Velocity.RegisterEffect('transition.pushLeftIn', {
  defaultDuration: 500,
  calls: [
    [
      {
        translateX: ['0%', '-100%'],
        translateZ: 0,
        easing: "ease-in-out",
        opacity: [1, 1]
      }
    ]
  ]
});

$.Velocity.RegisterEffect('transition.pushRightOut', {
  defaultDuration: 500,
  calls: [
    [
      {
        translateX: ['100%', '0%'],
        translateZ: 0,
        easing: "ease-in-out",
        opacity: [1, 1]
      }
    ]
  ]
});

$.Velocity.RegisterEffect('transition.pushDownIn', {
  defaultDuration: 500,
  calls: [
    [
      {
        translateY: ['0%', '100%'],
        translateZ: 0,
        easing: "ease-in-out",
        opacity: [1, 1]
      }
    ]
  ]
});

$.Velocity.RegisterEffect('transition.pushUpOut', {
  defaultDuration: 500,
  calls: [
    [
      {
        translateY: ['-100%', '0%'],
        translateZ: 0,
        easing: "ease-in-out",
        opacity: [1, 1]
      }
    ]
  ]
});

$.Velocity.RegisterEffect('transition.pushUpIn', {
  defaultDuration: 500,
  calls: [
    [
      {
        translateY: ['0%', '-100%'],
        translateZ: 0,
        easing: "ease-in-out",
        opacity: [1, 1]
      }
    ]
  ]
});

$.Velocity.RegisterEffect('transition.pushDownOut', {
  defaultDuration: 500,
  calls: [
    [
      {
        translateY: ['100%', '0%'],
        translateZ: 0,
        easing: "ease-in-out",
        opacity: [1, 1]
      }
    ]
  ]
});