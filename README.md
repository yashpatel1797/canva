
# Canva drawing

This is a simple drawing app built with React.js that allows users to create rectangles and text boxes, drag and resize them, and perform various other actions like zooming and scrolling the canvas.

## Features

- **Create Rectangles and Text Boxes**: Users can create rectangles and text boxes by clicking the respective buttons in the toolbar at the bottom of the app.
- **Drag and Drop**: Objects can be dragged around the canvas using the mouse or touchscreen.
- **Resize Rectangles**: Rectangle objects can be resized by dragging their corners or edges.
- **Edit Text Boxes**: Text inside text boxes can be edited by clicking on the text box and typing.
- **Select Objects**: Objects can be selected by clicking on them, and the selected object will have a blue outline.
- **Delete Objects**: The "Delete" button in the toolbar will remove the currently selected object.
- **Zoom**: Users can zoom in and out of the canvas using the mouse wheel, trackpad scroll, or pinch-to-zoom on touch screens.
- **Scroll**: The canvas can be scrolled using the mouse, trackpad, or touch gestures.

## Technologies Used

- React.js
- `react-draggable` library for dragging and dropping objects
- `react-rnd` library for resizing rectangles

## Installation

1. Clone the repository:

```
git clone https://github.com/your-username/simple-drawing-app.git
```

2. Navigate to the project directory:

```
cd simple-drawing-app
```

3. Install dependencies:

```
npm install
```

4. Start the development server:

```
npm start
```

The app should now be running at `http://localhost:3000`.