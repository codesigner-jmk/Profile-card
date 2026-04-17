# Profile Card Component 
A modern, responsive profile card UI component built using plain HTML, CSS, and Vanilla JavaScript. This project showcases a personal profile with social links, hobbies, dislikes, and a live time indicator.

## Live Demo

[Live site on Github Pages](https://codesigner-jmk.github.io/Profile-card/)

## Tech Stack

+ HTML5 — Semantic structure & ARIA roles
+ CSS3 — Modular responsive styling (Flexbox + Grid)
+ JavaScript — timestamp handling, and accessibility

## Features
+ Profile image with hover zoom effect
+ Name and bio section
+ Live updating timestamp (in milliseconds)
+ Social media links (GitHub, Behance, LinkedIn, Twitter)
+ Hobbies and dislikes tags
+ Subtle animations (pulse indicator, hover states)
+ Fully responsive design

## How to Run Locally
1. Clone the repository
   > **git** clone https://github.com/codesigner-jmk/Profile-card.git
  
   > **cd** Profile card

2. Open the project
    Since this is a static project, no installation is required.

    You can simply open the `index.html` file in your browser:

    Double-click` index.html`, or
    Right-click → Open with browser

**OR**

1. Under code download the project zip file
2. After downloading, find the file in your computer’s Downloads folder
3. Right-click on the downloaded `.zip` file and select "Extract All" or "Unzip". This will create a new folder with the application files inside.
4. Enter the folder and double click `Index.html`

### Optional (Recommended)
If you use a code editor like VS Code:

  1. Install the Live Server extension
  2. Right-click index.html
  3. Click “Open with Live Server”

  This gives you auto-reload while editing.

## Customization
You can easily modify:

+ Profile content → Update text in `index.html`
+ Avatar image → Replace `images/avatar.jpg`
+ Social links → Edit anchor tags
+ Hobbies/Dislikes → Update list items
+ Theme colors → Adjust values in `styles.css`

## Known Limitations

+ Time is displayed only in raw milliseconds (not human-readable)
+ No data fetching (all content is static)
+ No component reusability (not modularized into JS components)

## Accessibility Notes

+ Uses semantic HTML (`article`, `section`, `figure`)
+ Includes `alt` text for profile image
+ Live time uses `aria-live="polite"` for screen readers
+ External links include:
   + `target="_blank"`
   + `rel="noopener noreferrer"`


## Summary
This project demonstrates how simple technologies, HTML, CSS, and JavaScript can be combined to create a polished, interactive UI component with responsive design and thoughtful user experience.
