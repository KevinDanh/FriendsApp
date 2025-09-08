# 👫 FriendsApp

A lightweight scheduling app for planning events with friends. Create, share, and manage gatherings effortlessly—whether it's a casual hangout or a full-blown party.

---

## 🚩 Table of Contents

- [Features](#features)  
- [How to Run](#how-to-run)  
  - [Windows](#windows)  
  - [macOS / Linux](#macos--linux)  
- [Getting Started](#getting-started)  
- [Tech Stack](#tech-stack)  
- [License](#license)

---

## ✨ Planned Features

- 📅 Create and edit events with custom titles, dates, and descriptions  
- 👥 Invite friends and track RSVPs  
- 🔔 Get notified of upcoming events  
- 🌐 Sync across devices (coming soon)

---

## 🛠️ How to Run

### 🪟 Windows

#### **Install Node.js**
- Download from [nodejs.org](https://nodejs.org/en/download)
- Recommended version: **v22.19.0 (LTS)**
- Follow the installer instructions

#### **Verify Installation**
```bash
node -v
npm -v
```

---

### 🍎 macOS / 🐧 Linux

#### **Install Node.js via nvm (recommended)**
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install 22.19.0
nvm use 22.19.0
```

#### **Verify Installation**
```bash
node -v
npm -v
```

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/FriendsApp.git
   cd FriendsApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the app**
   ```bash
   npm start
   ```

4. **Open in browser**
   - Visit: `http://localhost:3000`

---

## 🧰 Tech Stack

| Layer         | Technology            |
|---------------|------------------------|
| Frontend      | React + Tailwind CSS   |
| Backend       | Node.js + Express      |
| Database      | MongoDB (via Mongoose) |
| Auth & Invite | JWT + Email API (planned) |

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
