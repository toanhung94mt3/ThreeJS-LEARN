BASE KNOWLEDGE

# Creating a scene
Để thực sự có thể hiển thị bất cứ thứ gì với 3.js, chúng tôi cần ba thứ: Scene, Camera and Renderer (Render the Scene with Camera).

Scene: ->   const scene = new THREE.Scene();

Cameras:
    PerspectiveCamera(FOV, AR, N, F):
        - Thuộc tính đầu tiên là trường xem (Field Of View). FOV là phạm vi của cảnh được nhìn thấy trên màn hình tại bất kỳ thời điểm nào. Giá trị tính bằng độ.
        - Tỷ lệ khung hình (Aspect Ratio). Bạn hầu như luôn muốn sử dụng chiều rộng của phần tử chia cho chiều cao, nếu không bạn sẽ nhận được kết quả tương tự như khi bạn phát các bộ phim cũ trên TV màn hình rộng.
        - Hai thuộc tính tiếp theo là mặt phẳng cắt gần (Near) và (Far). Các đối tượng ở xa máy ảnh hơn giá trị của 'xa' hoặc gần hơn 'gần' sẽ không được hiển thị. Có thể sử dụng để có được hiệu suất tốt hơn.
        ->  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

Renderer: 
    - Ngoài WebGLRenderer, 3.js đi kèm với một số trình kết xuất, thường được sử dụng làm dự phòng cho người dùng có trình duyệt cũ hơn hoặc cho những người không có hỗ trợ WebGL vì một số lý do.
    - Ngoài việc tạo renderer instance, Cần đặt kích thước (setSize) hiển thị ứng dụng. Trong trường hợp này là chiều rộng và chiều cao của cửa sổ trình duyệt.
    - Nếu muốn giữ nguyên kích thước của ứng dụng nhưng hiển thị nó ở độ phân giải thấp hơn, có thể làm vậy bằng cách gọi setSize với updateStyle = false (đối số thứ ba). -> setSize (window.innerWidth / 2, window.innerHeight / 2, false)
    - Cuối cùng Thêm phần tử renderer vào HTML. Đây là phần tử <canvas> mà trình kết xuất sử dụng để hiển thị Scene.

    ->  const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);



