# 📝 Todo App - Xây dựng Ứng dụng với Claude Code AI

Dự án hướng dẫn chi tiết cách xây dựng một ứng dụng quản lý công việc hoàn chỉnh từ đầu đến cuối sử dụng **Claude Code AI** - trợ lý AI mạnh mẽ cho lập trình viên.

## 🎯 Giới thiệu

Dự án này minh họa quy trình phát triển phần mềm hiện đại với sự hỗ trợ của AI, từ lập kế hoạch, thiết kế kiến trúc, viết code, đến triển khai lên GitHub. Bạn sẽ học được cách tận dụng Claude Code AI để tăng tốc độ phát triển và đảm bảo chất lượng code.

## ✨ Tính năng Ứng dụng

- ✅ Thêm công việc mới với timestamp tự động
- 📋 Xem danh sách công việc theo thứ tự thời gian
- ✔️ Đánh dấu hoàn thành với checkbox
- 🗑️ Xóa công việc không cần thiết
- 💾 Lưu trữ tự động vào localStorage
- 📊 Thống kê trực quan (tổng số, hoàn thành, chưa xong)
- 📱 Responsive design cho mọi thiết bị
- 🎨 Giao diện gradient hiện đại

## 🤖 Về Claude Code AI

**Claude Code** là trợ lý AI được phát triển bởi Anthropic, hỗ trợ lập trình viên trong toàn bộ quy trình phát triển phần mềm:

- 📝 **Lập kế hoạch**: Phân tích yêu cầu, thiết kế kiến trúc, đề xuất cấu trúc dự án
- 💻 **Viết code**: Tạo code chất lượng cao, tuân thủ best practices
- 🔍 **Review code**: Kiểm tra lỗi, tối ưu hiệu suất, đảm bảo bảo mật
- 📚 **Giải thích code**: Phân tích logic, giải thích từng phần code
- 🚀 **Triển khai**: Hỗ trợ Git, GitHub, CI/CD

**Ưu điểm khi dùng Claude Code:**
- Tăng tốc độ phát triển 3-5 lần
- Giảm thiểu lỗi và bug
- Code có cấu trúc tốt, dễ bảo trì
- Học hỏi best practices từ AI

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

## 🚀 Xây dựng Dự án với Claude Code AI

### Bước 1: Cài đặt Claude Code

**Cách 1: Sử dụng CLI (Command Line Interface)**
```bash
# Cài đặt Claude Code CLI
npm install -g @anthropic-ai/claude-code

# Hoặc sử dụng npx (không cần cài đặt)
npx @anthropic-ai/claude-code
```

**Cách 2: Sử dụng Desktop App**
- Tải về từ: https://claude.ai/code
- Cài đặt cho Windows/Mac/Linux
- Đăng nhập với tài khoản Anthropic

**Cách 3: Sử dụng VS Code Extension**
- Mở VS Code → Extensions
- Tìm "Claude Code"
- Click Install

### Bước 2: Khởi tạo Dự án

1. **Tạo thư mục dự án**:
```bash
mkdir todo-app
cd todo-app
```

2. **Khởi động Claude Code**:
```bash
# Nếu dùng CLI
claude-code

# Hoặc mở Desktop App và chọn thư mục todo-app
```

3. **Tạo file CLAUDE.md** (hướng dẫn cho AI):
```bash
# Yêu cầu Claude tạo file hướng dẫn
"Tạo file CLAUDE.md với hướng dẫn dự án Todo App bằng tiếng Việt"
```

### Bước 3: Lập Kế hoạch với Claude Code

**Prompt để lập kế hoạch**:
```
Hãy lên kế hoạch xây dựng todo app với các tính năng:
1. Thêm task mới
2. Xem danh sách task
3. Đánh dấu task hoàn thành
4. Xóa task
5. Lưu dữ liệu vào localStorage

Đề xuất cấu trúc thư mục và các file cần tạo.
```

**Claude Code sẽ**:
- Phân tích yêu cầu
- Đề xuất kiến trúc dự án
- Tạo file kế hoạch chi tiết
- Giải thích từng bước thực hiện

### Bước 4: Xây dựng Cấu trúc Dự án

**Prompt**:
```
Tạo cấu trúc thư mục theo kế hoạch đã đề xuất
```

Claude Code sẽ tự động tạo:
```
todo-app/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── storage.js
│   └── app.js
├── data/
│   └── tasks.json
└── CLAUDE.md
```

### Bước 5: Viết Code với Claude Code

**5.1. Tạo file storage.js**

**Prompt**:
```
Tạo file js/storage.js để quản lý localStorage với các chức năng:
- loadTasks(): đọc dữ liệu
- saveTasks(): lưu dữ liệu
- Xử lý lỗi khi file không tồn tại
```

**Claude Code sẽ tạo**:
```javascript
const Storage = {
  STORAGE_KEY: 'todo-app-tasks',

  loadTasks() {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Lỗi khi đọc dữ liệu:', error);
      return [];
    }
  },

  saveTasks(tasks) {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(tasks));
      return true;
    } catch (error) {
      console.error('Lỗi khi lưu dữ liệu:', error);
      return false;
    }
  }
};
```

**Giải thích code**:
- `STORAGE_KEY`: Key để lưu trữ trong localStorage
- `loadTasks()`: Đọc dữ liệu từ localStorage, parse JSON, trả về mảng rỗng nếu lỗi
- `saveTasks()`: Chuyển mảng tasks thành JSON và lưu vào localStorage
- `try-catch`: Xử lý lỗi khi localStorage không khả dụng

**5.2. Tạo file app.js**

**Prompt**:
```
Tạo file js/app.js với các chức năng:
- addTask(title): thêm task mới
- toggleTask(id): đánh dấu hoàn thành
- deleteTask(id): xóa task
- renderTasks(): hiển thị danh sách
- updateStats(): cập nhật thống kê
```

**Claude Code sẽ tạo code với giải thích**:

```javascript
let tasks = [];

// Hàm format ngày giờ theo múi giờ UTC+7
function formatDate() {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

// Thêm task mới
function addTask(title) {
  if (!title.trim()) return; // Kiểm tra input rỗng

  const newTask = {
    id: Date.now(), // ID duy nhất dựa trên timestamp
    title: title.trim(),
    completed: false,
    createdAt: formatDate()
  };

  tasks.push(newTask);
  Storage.saveTasks(tasks); // Lưu vào localStorage
  renderTasks(); // Cập nhật giao diện
}

// Đánh dấu hoàn thành/chưa hoàn thành
function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.completed = !task.completed;
    Storage.saveTasks(tasks);
    renderTasks();
  }
}

// Xóa task
function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  Storage.saveTasks(tasks);
  renderTasks();
}

// Hiển thị danh sách tasks
function renderTasks() {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.className = task.completed ? 'completed' : '';

    li.innerHTML = `
      <input type="checkbox" ${task.completed ? 'checked' : ''} 
             onchange="toggleTask(${task.id})">
      <span class="task-title">${task.title}</span>
      <span class="task-date">${task.createdAt}</span>
      <button class="delete-btn" onclick="deleteTask(${task.id})">Xóa</button>
    `;

    taskList.appendChild(li);
  });

  updateStats();
}

// Cập nhật thống kê
function updateStats() {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = total - completed;

  document.getElementById('total-tasks').textContent = total;
  document.getElementById('completed-tasks').textContent = completed;
  document.getElementById('pending-tasks').textContent = pending;
}

// Khởi tạo khi trang load
document.addEventListener('DOMContentLoaded', () => {
  tasks = Storage.loadTasks(); // Load dữ liệu từ localStorage
  renderTasks();

  const form = document.getElementById('task-form');
  const input = document.getElementById('task-input');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTask(input.value);
    input.value = '';
  });
});
```

**Giải thích chi tiết**:

1. **formatDate()**: 
   - Tạo timestamp theo định dạng dd/mm/yyyy hh:mm
   - Sử dụng `padStart(2, '0')` để thêm số 0 phía trước (01, 02...)

2. **addTask(title)**:
   - Kiểm tra input không rỗng với `trim()`
   - Tạo ID duy nhất bằng `Date.now()` (milliseconds từ 1970)
   - Lưu vào localStorage và cập nhật UI

3. **toggleTask(id)**:
   - Tìm task theo ID với `find()`
   - Đảo ngược trạng thái `completed`
   - Lưu và render lại

4. **deleteTask(id)**:
   - Lọc bỏ task có ID tương ứng với `filter()`
   - Cập nhật mảng tasks và localStorage

5. **renderTasks()**:
   - Xóa nội dung cũ với `innerHTML = ''`
   - Duyệt qua từng task và tạo HTML
   - Thêm class `completed` cho task đã xong
   - Gọi `updateStats()` để cập nhật số liệu

6. **DOMContentLoaded**:
   - Chờ DOM load xong mới chạy code
   - Load dữ liệu từ localStorage
   - Gắn event listener cho form submit

**5.3. Tạo file index.html**

**Prompt**:
```
Tạo file index.html với:
- Form nhập task mới
- Danh sách tasks
- Phần thống kê
- Link đến CSS và JS
```

**5.4. Tạo file style.css**

**Prompt**:
```
Tạo file css/style.css với:
- Gradient background đẹp mắt
- Responsive design
- Animation mượt mà
- Màu sắc phân biệt task hoàn thành/chưa hoàn thành
```

### Bước 6: Kiểm tra và Debug

**Prompt**:
```
Kiểm tra ứng dụng bằng cách mở index.html trong trình duyệt
```

Claude Code sẽ:
- Hướng dẫn mở file trong trình duyệt
- Kiểm tra console log có lỗi không
- Test từng tính năng
- Sửa lỗi nếu có

### Bước 7: Triển khai lên GitHub

**7.1. Khởi tạo Git**

**Prompt**:
```
Khởi tạo git repository và kết nối với GitHub
```

Claude Code sẽ chạy:
```bash
git init
git remote add origin https://github.com/username/todo-app.git
```

**7.2. Tạo commit**

**Prompt**:
```
Tạo commit với message mô tả đầy đủ tính năng
```

Claude Code sẽ:
- Kiểm tra `git status`
- Add các file cần thiết
- Tạo commit message chi tiết
- Commit với co-author là Claude

**7.3. Push lên GitHub**

**Prompt**:
```
Push code lên GitHub branch main
```

Claude Code sẽ:
- Push code lên remote
- Xử lý conflict nếu có
- Xác nhận push thành công

## 📖 Hướng dẫn Sử dụng Ứng dụng

### Chạy ứng dụng

1. **Clone repository**:
```bash
git clone https://github.com/thienminhdevsys/todo-app.git
cd todo-app
```

2. **Mở file index.html**:
   - Double click vào `index.html`
   - Hoặc kéo thả vào trình duyệt
   - Hoặc dùng Live Server trong VS Code

### Sử dụng các tính năng

**1. Thêm task mới**
- Nhập tên công việc vào ô input
- Nhấn "Thêm" hoặc Enter
- Task xuất hiện với timestamp tự động

**2. Đánh dấu hoàn thành**
- Click checkbox bên trái task
- Task sẽ có gạch ngang và mờ đi
- Thống kê tự động cập nhật

**3. Xóa task**
- Click nút "Xóa" màu đỏ
- Task bị xóa ngay lập tức

**4. Xem thống kê**
- Tổng số: tổng task trong danh sách
- Hoàn thành: số task đã check
- Chưa xong: số task chưa check

## 💡 Tips Sử dụng Claude Code AI

### Các prompt hiệu quả

**Lập kế hoạch**:
```
"Phân tích yêu cầu và đề xuất kiến trúc cho dự án [tên dự án]"
"Lên kế hoạch chi tiết cho tính năng [tên tính năng]"
```

**Viết code**:
```
"Tạo file [tên file] với chức năng [mô tả chức năng]"
"Viết hàm [tên hàm] để [mô tả mục đích]"
"Thêm tính năng [tên tính năng] vào file [tên file]"
```

**Giải thích code**:
```
"Giải thích chi tiết code trong file [tên file]"
"Phân tích logic của hàm [tên hàm]"
"Tại sao code này hoạt động như vậy?"
```

**Debug**:
```
"Kiểm tra lỗi trong file [tên file]"
"Tại sao [mô tả lỗi] xảy ra?"
"Sửa lỗi [mô tả lỗi]"
```

**Tối ưu**:
```
"Tối ưu hiệu suất cho hàm [tên hàm]"
"Refactor code trong file [tên file]"
"Cải thiện cấu trúc dự án"
```

### Best Practices khi dùng Claude Code

1. **Prompt rõ ràng**: Mô tả chi tiết yêu cầu, tránh mơ hồ
2. **Từng bước một**: Chia nhỏ task lớn thành các bước nhỏ
3. **Review code**: Luôn đọc và hiểu code AI tạo ra
4. **Hỏi giải thích**: Yêu cầu AI giải thích phần code khó hiểu
5. **Test kỹ**: Kiểm tra kỹ từng tính năng sau khi code xong

## 🎓 Kiến thức Học được

Qua dự án này, bạn sẽ học được:

### Về lập trình
- ✅ HTML5 semantic tags
- ✅ CSS3 flexbox, gradient, responsive
- ✅ JavaScript ES6+ (arrow function, template literals, array methods)
- ✅ DOM manipulation
- ✅ Event handling
- ✅ localStorage API

### Về Claude Code AI
- ✅ Cách lập kế hoạch dự án với AI
- ✅ Viết prompt hiệu quả
- ✅ Đọc và hiểu code AI tạo ra
- ✅ Debug với sự hỗ trợ của AI
- ✅ Triển khai dự án lên GitHub

### Về quy trình phát triển
- ✅ Phân tích yêu cầu
- ✅ Thiết kế kiến trúc
- ✅ Viết code có cấu trúc
- ✅ Test và debug
- ✅ Version control với Git
- ✅ Viết documentation

## ⚠️ Lưu ý Quan trọng

### Về localStorage
- Dữ liệu lưu trong trình duyệt, không đồng bộ giữa các thiết bị
- Xóa cache/cookies sẽ mất dữ liệu
- Không mã hóa, không lưu thông tin nhạy cảm

### Về Claude Code AI
- Luôn review code AI tạo ra trước khi sử dụng
- Hiểu logic code, không copy mù quáng
- AI có thể sai, cần kiểm tra kỹ
- Prompt càng rõ ràng, kết quả càng tốt

## 🛠️ Công nghệ Sử dụng

- **HTML5**: Cấu trúc semantic
- **CSS3**: Flexbox, gradient, responsive
- **JavaScript ES6+**: Arrow function, template literals, modules
- **localStorage API**: Lưu trữ dữ liệu client-side
- **Git**: Version control
- **Claude Code AI**: Trợ lý lập trình

## 📚 Tài nguyên Tham khảo

### Claude Code
- Website: https://claude.ai/code
- Documentation: https://docs.anthropic.com/claude-code
- GitHub: https://github.com/anthropics/claude-code

### Web Development
- MDN Web Docs: https://developer.mozilla.org
- JavaScript.info: https://javascript.info
- CSS Tricks: https://css-tricks.com

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón!

1. Fork repository
2. Tạo branch mới: `git checkout -b feature/TenTinhNang`
3. Commit: `git commit -m 'Thêm tính năng X'`
4. Push: `git push origin feature/TenTinhNang`
5. Tạo Pull Request

## 👨‍💻 Tác giả

**Thiên Minh Dev**
- GitHub: [@thienminhdevsys](https://github.com/thienminhdevsys)
- Repository: [todo-app](https://github.com/thienminhdevsys/todo-app)

## 📝 Giấy phép

Dự án này được phát hành dưới giấy phép MIT. Bạn có thể tự do sử dụng, chỉnh sửa và phân phối.

## 🎯 Kết luận

Dự án Todo App này minh họa cách sử dụng **Claude Code AI** để xây dựng một ứng dụng web hoàn chỉnh từ đầu đến cuối. Bạn đã học được:

- ✅ Cách làm việc hiệu quả với AI assistant
- ✅ Quy trình phát triển phần mềm chuyên nghiệp
- ✅ Kỹ năng lập trình web cơ bản đến nâng cao
- ✅ Best practices trong viết code và quản lý dự án

**Bước tiếp theo**: Thử áp dụng kiến thức này để xây dựng dự án riêng của bạn với sự hỗ trợ của Claude Code AI!

---

⭐ Nếu bạn thấy dự án hữu ích, hãy cho một star trên GitHub!

💬 Có câu hỏi? Tạo issue hoặc discussion trên repository.
