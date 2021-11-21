import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    // cube
    BoxGeometry,
    MeshBasicMaterial,
    Mesh,
    // line
    LineBasicMaterial,
    Vector3,
    BufferGeometry,
    Line,
} from 'three';

const init = () => {
    // Scene
    const scene = new Scene();
    // Camera
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    // Renderer
    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Cube
    const geometry = new BoxGeometry();     // BoxGeometry - đối tượng chứa tất cả các đỉnh và mặt của khối lập phương.
    const material = new MeshBasicMaterial({ color: 0x00ff00 });    // MeshBasicMaterial - vật liệu để tô màu.
    const cube = new Mesh(geometry, material);      // Mesh - đối tượng lấy một hình học và áp dụng vật liệu cho nó, có thể chèn vào Scene.
    scene.add(cube);        // Mặc định, đối tượng sẽ được thêm vào tọa độ (0,0,0).

    const animate = function () {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
    };
    animate();
    // ----

    // Line
    const linePoints = [];
    linePoints.push( new Vector3( - 10, 0, 0 ) );
    linePoints.push( new Vector3( 0, 10, 0 ) );
    linePoints.push( new Vector3( 10, 0, 0 ) );
    const lineGeometry = new BufferGeometry().setFromPoints( linePoints );
    const lineMaterial = new LineBasicMaterial( { color: 0x0000ff } );

    const line = new Line( lineGeometry, lineMaterial );
    scene.add( line );
    // ----




    camera.position.set( 0, 0, 20 );
    renderer.render( scene, camera );
}

init();
