# MindBet React - Quick Start Guide

## 🚀 Getting Started in 3 Steps

### Step 1: Install Dependencies
```bash
cd mindbet-react
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

The app will automatically open in your browser at **http://localhost:3000**

### Step 3: Start Coding!
All source files are in the `src/` directory.

---

## 📁 Project Structure

```
mindbet-react/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Header.jsx      # Navigation header
│   │   └── Footer.jsx      # Footer component
│   │
│   ├── pages/              # Page components (one per route)
│   │   ├── Home.jsx
│   │   ├── Sports.jsx
│   │   ├── LiveBetting.jsx
│   │   ├── Promotions.jsx
│   │   ├── Balance.jsx
│   │   ├── Deposit.jsx
│   │   ├── Login.jsx
│   │   └── Signup.jsx
│   │
│   ├── App.jsx             # Main app with routes
│   └── main.jsx            # React entry point
│
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies
```

---

## 🛣️ Available Routes

| Route           | Component      | Description                |
|-----------------|----------------|----------------------------|
| `/`             | Home           | Landing page               |
| `/sports`       | Sports         | Browse sports              |
| `/livebetting`  | LiveBetting    | Live betting interface     |
| `/promotions`   | Promotions     | Offers and bonuses         |
| `/balance`      | Balance        | Account balance            |
| `/deposit`      | Deposit        | Deposit funds              |
| `/login`        | Login          | User login                 |
| `/signup`       | Signup         | User registration          |

---

## 🛠️ Available Scripts

```bash
# Start development server (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 💡 Key Features

✅ **Single Page Application** - No page reloads, smooth navigation
✅ **React Router** - Client-side routing
✅ **React Hooks** - useState, useNavigate, useLocation
✅ **Responsive Design** - Mobile-friendly UI
✅ **Tailwind CSS** - Utility-first styling
✅ **Vite** - Lightning fast HMR and builds
✅ **Interactive UI** - Forms, notifications, betting interface

---

## 🎨 Styling

Uses **Tailwind CSS** (loaded via CDN in index.html)

All components use Tailwind utility classes:
```jsx
<button className="bg-teal-500 text-black font-bold py-3 px-6 rounded-full hover:bg-teal-400">
  Click Me
</button>
```

---

## 🔧 Common Tasks

### Add a New Page
1. Create new file in `src/pages/` (e.g., `NewPage.jsx`)
2. Import in `src/App.jsx`
3. Add route: `<Route path="/newpage" element={<NewPage />} />`
4. Add link in Header: `<Link to="/newpage">New Page</Link>`

### Add State to a Component
```jsx
import { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

### Navigate Programmatically
```jsx
import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/home');
  };
  
  return <button onClick={handleClick}>Go Home</button>;
}
```

### Show Toast Notification
```jsx
const [showMessage, setShowMessage] = useState(false);

const showNotification = () => {
  setShowMessage(true);
  setTimeout(() => setShowMessage(false), 2000);
};
```

---

## 📝 Form Handling Example

```jsx
import { useState } from 'react';

function MyForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
killall -9 node
# Or use a different port
vite --port 3001
```

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Changes Not Reflecting
1. Save the file
2. Check browser console for errors
3. Hard refresh: `Ctrl + Shift + R` (or `Cmd + Shift + R` on Mac)
4. Restart dev server: `Ctrl + C` then `npm run dev`

---

## 📦 Build for Production

```bash
# Create optimized build
npm run build

# Output will be in dist/ folder
# Deploy dist/ to your hosting service
```

---

## 🎯 What's Different from Original HTML?

| Feature              | Old (HTML)           | New (React)          |
|---------------------|---------------------|---------------------|
| Pages               | 8 separate files    | 1 SPA with routes   |
| Navigation          | Page reloads        | Instant navigation  |
| Code reuse          | Copy/paste          | Components          |
| State management    | Global vars         | React hooks         |
| Build process       | None                | Vite bundler        |
| Developer tools     | Basic               | HMR, React DevTools |

---

## 📚 Learn More

- [React Docs](https://react.dev)
- [React Router](https://reactrouter.com)
- [Vite Docs](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)

---

## ✨ Tips

1. **Use React DevTools** - Install browser extension for debugging
2. **Keep Components Small** - One component per file
3. **Use Hooks** - useState for state, useEffect for side effects
4. **Follow Naming** - Components use PascalCase (MyComponent.jsx)
5. **Props Flow Down** - Pass data from parent to child via props

---

## 🎉 You're Ready!

Start the dev server and begin building:
```bash
npm run dev
```

Happy coding! 🚀