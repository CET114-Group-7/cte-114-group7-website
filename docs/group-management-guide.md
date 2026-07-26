# Group 7 Website - Management Guide

This document explains everything about our CTE 114 website: where it lives online, how it works, and exactly how any group member can update it. Please read this fully before making any changes, since our repository is public and anyone in the world can view it.

---

## 1. Our important links

**Live website (what visitors see):**
https://cte-114-group7-website.vercel.app

**GitHub repository (where our code is stored):**
https://github.com/CET114-Group-7/cte-114-group7-website

**GitHub organization (our group's account):**
https://github.com/CET114-Group-7

Keep these three links saved somewhere every member can find them, such as the group WhatsApp chat.

---

## 2. What is GitHub, and what is Vercel

**GitHub** is a free website where we store our code files (HTML, CSS, and JavaScript). It keeps a saved history of every change anyone makes, so nothing is ever truly lost, even if someone makes a mistake.

**Vercel** is a free hosting service. It is connected to our GitHub repository. Whenever a file in our GitHub repository is changed, Vercel automatically rebuilds and republishes our live website within about a minute. We never upload anything directly to Vercel. We only ever upload to GitHub, and Vercel copies it automatically.

In short: GitHub stores the code, and Vercel turns that code into a live website.

---

## 3. Important rules since this is a public repository

Because our GitHub repository is public, anyone on the internet can see our files and our history of changes. Please follow these rules:

1. Do not upload any personal information that should stay private, such as home addresses or personal phone numbers.
2. Do not delete another member's uploaded file without first asking in the group chat.
3. Always check the live website after making a change, to confirm it looks correct.
4. If you are not sure whether a change is correct, ask another member to check it first.
5. Only the files that belong to our website should be in this repository (HTML, CSS, JavaScript, and image files). Do not upload unrelated files such as personal photos, WhatsApp exports, or unrelated documents.

---

## 4. Our website files

Our website is made of these files. Every member should know what each one does:

| File name | What it does |
|---|---|
| index.html | The Home page |
| about.html | The Team page |
| projects.html | The Skills page |
| contact.html | The Contact page |
| styles.css | Controls the colors, fonts, and layout for all pages |
| script.js | Controls the mobile menu button and the contact form |
| logo.svg | Our group logo, used in the menu bar |
| logo.png | A picture version of our logo, for use outside the website (for example, in Word documents) |

All of these files must always stay in the same folder together. Do not move any file into a subfolder, since this will break the website.

---

## 5. How to update the website (step by step)

You do not need to install anything on your phone or computer. Everything can be done through a normal web browser.

### Step 1: Open the repository
Go to:
https://github.com/CET114-Group-7/cte-114-group7-website

### Step 2: Sign in
Sign in with your own GitHub account. If you do not have one yet, create a free account at github.com first, then ask the group admin to add you as a member of the CET114-Group-7 organization.

### Step 3: Choose how you want to make the change

**Option A: Edit a file directly on GitHub (best for small text changes)**
1. Click on the file you want to change, for example about.html
2. Click the pencil icon (Edit this file) near the top right of the file
3. Make your change directly in the text box
4. Scroll to the bottom of the page
5. Under "Commit changes," type a short note describing what you changed, for example: "Updated member name for ND/CET/25/0045"
6. Click the green "Commit changes" button

**Option B: Upload new or replacement files (best for uploading several files at once)**
1. On the repository's main page, click "Add file"
2. Click "Upload files"
3. Drag in the files you want to add or replace. If a file already exists with the same name, GitHub will replace the old one automatically
4. Scroll down and click "Commit changes"

### Step 4: Wait for Vercel to update
After committing changes on GitHub, wait about 30 to 60 seconds, then open our live website link:
https://cte-114-group7-website.vercel.app

Refresh the page (you may need to refresh twice, or use a private/incognito browser tab) to see your update live.

### Step 5: Confirm it looks correct
Check the page you changed on both a phone and a computer if possible, to make sure nothing looks broken.

---

## 6. Checking if Vercel is connected properly

If you make a change on GitHub but the live website does not update after a few minutes:

1. Go to vercel.com and sign in
2. Open our project, cte-114-group7-website
3. Click the "Deployments" tab
4. You should see a new deployment listed with a recent timestamp. If it shows a red X, click on it to see what went wrong
5. If no new deployment appears at all, the GitHub connection may need to be reconnected. Contact the group member who originally set up the Vercel account

---

## 7. Adding a new group member to GitHub

If a member does not yet have access to upload files:

1. The organization owner should go to:
https://github.com/CET114-Group-7
2. Click "People"
3. Click the green "Invite member" button
4. Enter the person's GitHub username or email address
5. Send the invite. The new member must accept the invite from their own GitHub account before they can make changes

---

## 8. Who to contact

If anyone in the group is stuck or unsure about any of the steps above, contact:

- **Group Leader:** Sunusi Habib Kasim, ND/CET/25/0047
- **Phone number:** 09013599974

Sunusi Habib Kasim holds all the account details for GitHub and Vercel (login information, organization ownership, and deployment settings). If you need something changed that this guide does not cover, contact him directly using the number above before attempting it yourself.

Please do not guess or experiment directly on the live repository if unsure. Ask first, since our repository is public and mistakes are visible to anyone.

---

## 9. Quick summary

- We write code and store it on GitHub
- Vercel automatically turns that code into our live website
- Anyone in the group can update the site by editing or uploading files on GitHub
- Always double check the live link after every change
- Since the repository is public, be careful and respectful with what gets uploaded
