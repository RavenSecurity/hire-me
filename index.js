      // create a new scene
      var scene = new THREE.Scene();

      // field of view
      var fov = 120;
      // aspect ratio - use full width of container / height
      var aspect = window.innerWidth / window.innerHeight;
      // setup the clipping plane
      var near = 0.1; // front clipping plane
      var far = 1000; // back clipping plane
      // create new camera with defined vars from above
      var camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

      // create a new WebGLRenderer object
      var renderer = new THREE.WebGLRenderer();
      // set the size of the rending window -- smaller than full
      // size will result in lower resolution (ie window.innerWidth / 2
      // and window.innerHeight / 2 would result in HALF the resolution)
      renderer.setSize(window.innerWidth, window.innerHeight);
      // add the renderer to our page. This is the canvas element that the renderer uses
      // to display our scene
      document.body.appendChild(renderer.domElement);

      // setup dimensions of the sphere
      var radius = 2;
      // moar segments == moar roundedness!
      var widthSegments = 50;
      var heightSegments = 50;

      var geometry = new THREE.IcosahedronGeometry(4, 10);
      
      var material = new THREE.MeshBasicMaterial({
        color: 0xb1c6ec,
        wireframe: true,
      });
      // the Mesh object takes a geometry and applies a material to it that can be
      // inserted into the scene and be moved around
      var sphere = new THREE.Mesh(geometry, material);
      // add to our scene
      scene.add(sphere);

      // move the camera from default ( 0, 0, 0 )
      // so the camera & sphere don't fall into the same location
      camera.position.z = 5;

      // create render function. We use requestAnimationFrame instead of setInterval
      // because it pauses when the user navigates to another browser tab
      function render() {
        requestAnimationFrame(render);
        // rotation logic goes here
        sphere.rotation.y += 0.0005;
        renderer.render(scene, camera);
      }
      // call our render function to display the sphere
      render();
      renderer.setClearColor( 0xf3efe9 );

      gsap.fromTo('.copy span', {
        x: 50,
        opacity: 0,
      },
      {
      delay: 1, // 1秒後に発火
      duration: 2, // 1秒間
      x: 0,
      opacity: 1,
      ease: 'power2.easeOut',
      stagger: {
        from: 'start', // 左側から
        amount: 0.5, // 0.5秒おきに
      },
    })

    gsap.fromTo('.contact', {
      x: -50,
      opacity: 0,
    },
    {
    delay: 2, // 1秒後に発火
    duration: 2, // 1秒間
    x: 0,
    opacity: 1,
    ease: 'power2.easeOut',
    stagger: {
      from: 'start', // 左側から
      amount: 0.5, // 0.5秒おきに
    },
  })

  gsap.fromTo('.container', {
    x: -50,
    opacity: 0,
  },
  {
  delay: 2, // 1秒後に発火
  duration: 2, // 1秒間
  x: 0,
  opacity: 1,
  ease: 'power2.easeOut',
  stagger: {
    from: 'start', // 左側から
    amount: 0.5, // 0.5秒おきに
  },
})

// https://codepen.io/vcomics/pen/ZjMpOe