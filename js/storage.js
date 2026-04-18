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
