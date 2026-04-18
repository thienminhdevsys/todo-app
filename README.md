# 📝 Todo App - Ứng dụng Quản lý Công việc

Ứng dụng quản lý công việc đơn giản, hiện đại và dễ sử dụng được xây dựng bằng HTML, CSS và JavaScript thuần túy.

## 🎯 Mô tả Dự án

Todo App là một ứng dụng web giúp bạn quản lý các công việc hàng ngày một cách hiệu quả. Ứng dụng có giao diện thân thiện, dễ sử dụng và lưu trữ dữ liệu ngay trên trình duyệt của bạn thông qua localStorage.

## ✨ Tính năng

- ✅ **Thêm công việc mới**: Tạo task mới với timestamp tự động
- 📋 **Xem danh sách công việc**: Hiển thị tất cả tasks theo thứ tự thời gian
- ✔️ **Đánh dấu hoàn thành**: Checkbox để đánh dấu task đã hoàn thành
- 🗑️ **Xóa công việc**: Xóa task không cần thiết
- 💾 **Lưu trữ tự động**: Dữ liệu được lưu vào localStorage, không mất khi đóng trình duyệt
- 📊 **Thống kê trực quan**: Hiển thị tổng số task, đã hoàn thành và chưa hoàn thành
- 📱 **Responsive Design**: Giao diện tương thích với mọi thiết bị (desktop, tablet, mobile)
- 🎨 **Giao diện đẹp mắt**: Gradient màu hiện đại, animation mượt mà

## 📁 Cấu trúc Thư mục

```
todo-app/
├── index.html              # File HTML chính - giao diện ứng dụng
├── css/
│   └── style.css          # File CSS - styling cho toàn bộ ứng dụng
├── js/
│   ├── storage.js         # Module quản lý localStorage
│   └── app.js             # Logic chính của ứng dụng
├── data/
│   └── tasks.json         # File JSON mẫu (template)
├── CLAUDE.md              # Hướng dẫn cho Claude Code
└── README.md              # File tài liệu này
```

## 🚀 Hướng dẫn Cài đặt và Chạy

### Yêu cầu hệ thống

- Trình duyệt web hiện đại (Chrome, Firefox, Safari, Edge)
- Không cần cài đặt thêm bất kỳ phần mềm nào

### Các bước cài đặt

1. **Clone repository về máy**:
   ```bash
   git clone https://github.com/thienminhdevsys/todo-app.git
   ```

2. **Di chuyển vào thư mục dự án**:
   ```bash
   cd todo-app
   ```

3. **Mở file `index.html` trong trình duyệt**:
   - Cách 1: Double click vào file `index.html`
   - Cách 2: Click chuột phải → Open with → Chọn trình duyệt
   - Cách 3: Kéo thả file `index.html` vào cửa sổ trình duyệt

4. **Hoặc sử dụng Live Server** (nếu dùng VS Code):
   ```bash
   # Cài đặt Live Server extension trong VS Code
   # Sau đó click chuột phải vào index.html → Open with Live Server
   ```

## 📖 Hướng dẫn Sử dụng

### 1. Thêm công việc mới

- Nhập tên công việc vào ô input "Nhập công việc mới..."
- Nhấn nút **"Thêm"** hoặc nhấn phím **Enter**
- Task mới sẽ xuất hiện trong danh sách với thời gian tạo

### 2. Xem danh sách công việc

- Tất cả các task được hiển thị dưới dạng danh sách
- Mỗi task bao gồm:
  - Checkbox để đánh dấu hoàn thành
  - Tên công việc
  - Thời gian tạo (định dạng: dd/mm/yyyy hh:mm)
  - Nút "Xóa"

### 3. Đánh dấu hoàn thành

- Click vào **checkbox** bên trái task
- Task hoàn thành sẽ có:
  - Chữ gạch ngang
  - Màu mờ đi
  - Thống kê tự động cập nhật

### 4. Xóa công việc

- Click vào nút **"Xóa"** màu đỏ bên phải task
- Task sẽ bị xóa khỏi danh sách ngay lập tức
- Dữ liệu được cập nhật tự động

### 5. Xem thống kê

Phần thống kê ở đầu trang hiển thị:
- **Tổng số**: Tổng số task trong danh sách
- **Hoàn thành**: Số task đã đánh dấu hoàn thành
- **Chưa xong**: Số task chưa hoàn thành

## ⚠️ Lưu ý Khi Sử dụng

### Về lưu trữ dữ liệu

- ✅ Dữ liệu được lưu trong **localStorage** của trình duyệt
- ✅ Dữ liệu **không bị mất** khi đóng tab hoặc tắt trình duyệt
- ⚠️ Dữ liệu **chỉ tồn tại trên trình duyệt hiện tại**
- ⚠️ Nếu xóa cache/cookies của trình duyệt, dữ liệu sẽ bị mất
- ⚠️ Dữ liệu **không đồng bộ** giữa các thiết bị hoặc trình duyệt khác

### Về tương thích

- ✅ Hoạt động tốt trên Chrome, Firefox, Safari, Edge (phiên bản mới)
- ✅ Responsive, tương thích với mobile và tablet
- ⚠️ Không hỗ trợ Internet Explorer

### Về bảo mật

- ✅ Không cần kết nối internet
- ✅ Dữ liệu lưu trữ local, không gửi lên server
- ⚠️ Không mã hóa dữ liệu trong localStorage
- ⚠️ Không nên lưu thông tin nhạy cảm

### Mẹo sử dụng

- 💡 Nhấn **Enter** để thêm task nhanh chóng
- 💡 Sử dụng tên task ngắn gọn, dễ hiểu
- 💡 Xóa các task đã hoàn thành để giữ danh sách gọn gàng
- 💡 Kiểm tra thống kê để theo dõi tiến độ công việc

## 🛠️ Công nghệ Sử dụng

- **HTML5**: Cấu trúc trang web
- **CSS3**: Styling và responsive design
- **JavaScript (ES6+)**: Logic và xử lý sự kiện
- **localStorage API**: Lưu trữ dữ liệu

## 📝 Giấy phép

Dự án này được phát hành dưới giấy phép MIT. Bạn có thể tự do sử dụng, chỉnh sửa và phân phối.

## 👨‍💻 Tác giả

**Thiên Minh Dev**
- GitHub: [@thienminhdevsys](https://github.com/thienminhdevsys)
- Repository: [todo-app](https://github.com/thienminhdevsys/todo-app)

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Nếu bạn muốn cải thiện dự án:

1. Fork repository
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit thay đổi (`git commit -m 'Add some AmazingFeature'`)
4. Push lên branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📞 Liên hệ

Nếu có bất kỳ câu hỏi hoặc góp ý nào, vui lòng tạo issue trên GitHub.

---

⭐ Nếu bạn thấy dự án hữu ích, hãy cho một star nhé!
