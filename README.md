# 📝 Todo App

A clean, modern todo list application built with React and Tailwind CSS. Features include adding, completing, filtering, and deleting tasks with persistent localStorage storage.

![Todo App Screenshot](https://via.placeholder.com/800x400/f3f4f6/374151?text=Todo+App+Screenshot)

## ✨ Features

- ✅ **Add new todos** - Simple form to add new tasks
- 🔄 **Toggle completion** - Mark tasks as complete/incomplete
- 🗑️ **Delete todos** - Remove tasks you no longer need
- 🔍 **Filter todos** - View all, active, or completed tasks
- 📊 **Progress tracking** - See completion statistics
- 💾 **Persistent storage** - Data saved in localStorage
- 📱 **Responsive design** - Works on desktop and mobile
- ♿ **Accessible** - ARIA labels and keyboard navigation

## 🏗️ Architecture

The app follows a clean, component-based architecture:

```
src/
├── components/
│   ├── AddTodoForm.jsx    # Form for adding new todos
│   ├── TodoItem.jsx       # Individual todo item component
│   └── TodoList.jsx       # List container with filtering
├── hooks/
│   └── useTodos.js        # Custom hook for todo state management
├── App.jsx                # Main app component
├── main.jsx               # React entry point
└── index.css              # Tailwind CSS styles
```

### Key Components

- **`AddTodoForm`** - Handles new todo input with validation
- **`TodoItem`** - Displays individual todos with toggle/delete actions
- **`TodoList`** - Manages filtering and displays the todo collection
- **`useTodos`** - Custom hook encapsulating all todo logic and localStorage persistence

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd claude-4
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the URL shown in terminal)

## 📦 Available Scripts

- **`npm run dev`** - Start development server with hot reload
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build locally
- **`npm run lint`** - Run ESLint for code quality

## 🎨 Styling Setup (Tailwind CSS)

This project uses Tailwind CSS for styling. The setup includes:

### Configuration Files

- **`tailwind.config.js`** - Tailwind configuration
- **`postcss.config.js`** - PostCSS configuration for Tailwind
- **`src/index.css`** - Tailwind directives and custom component styles

### Custom Components

The app defines reusable CSS classes in `src/index.css`:

```css
.todo-item
  #
  Styled
  todo
  item
  container
  .btn-primary
  #
  Primary
  action
  buttons
  .btn-secondary
  #
  Secondary
  action
  buttons
  .btn-danger
  #
  Delete/destructive
  buttons;
```

### Alternative Styling Options

If you prefer different styling approaches:

**Sass Setup:**

```bash
npm install -D sass
# Then rename .css files to .scss and import accordingly
```

**Plain CSS:**
Remove Tailwind dependencies and use traditional CSS in component files.

## 🧪 Testing

### Manual Testing Checklist

- [ ] Add a new todo
- [ ] Mark todo as complete/incomplete
- [ ] Delete a todo
- [ ] Filter by All/Active/Completed
- [ ] Clear completed todos
- [ ] Refresh page (data should persist)
- [ ] Try with empty input (should be prevented)
- [ ] Test responsive design on mobile

### Adding Automated Tests

To add testing capabilities:

```bash
# Install testing dependencies
npm install -D @testing-library/react @testing-library/jest-dom vitest jsdom

# Add to package.json scripts:
"test": "vitest",
"test:ui": "vitest --ui"
```

## 🔧 Customization

### Adding New Features

The modular architecture makes it easy to extend:

1. **Add new todo properties** - Modify the `addTodo` function in `useTodos.js`
2. **Add new filters** - Extend the filter logic in `TodoList.jsx`
3. **Add categories/tags** - Create new components and update the todo data structure
4. **Add due dates** - Extend `TodoItem` and add date handling logic

### Styling Customization

- **Colors** - Modify Tailwind classes or extend the theme in `tailwind.config.js`
- **Layout** - Adjust spacing and sizing in component files
- **Animations** - Add Tailwind transitions or custom CSS animations

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Bundled with [Vite](https://vitejs.dev/)
- Icons from [Emoji](https://emojipedia.org/)

---

**Happy todo-ing! 🎉**
