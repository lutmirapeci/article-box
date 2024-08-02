# javascript-exercises

## 5th javascript mentorship session

From now on the mentorships will be committed in the respective branches : mentorship03, mentorship04, mentorship05, etc.

## Add your files

```
cd existing_repo
cd solutions
git remote add origin https://git.brainster.co/mentor-class-group-5/javascript-exercises
git pull
git checkout mentorship05
git add .
git commit -m "added starter files"
git push
```

## Exercise 01

```
You are given an array of article information in the starter folder. Create a function createArticleBox which returns the container that displays article details - see screenshot01 or video. \
Iterate through the article data and use the function to create an article-box for each iteration.
Then append the newly created box each time on the .article-wrapper div.
Use document.createElement for each iteration.
Everything must be done using Javascript inside the <script.js> file.
Use CSS or Bootstrap classes only for styling the article boxes.
```

## Exercise 02

```
Continuing from exercise01, when hovering over the article image, it zooms it, when moving the mouse away it returns to the original state.
See video for reference.
Use this CSS class/style:

.zoomed {
    transform: scale(1.2);
    transition: transform 0.3s ease-in-out;
}

```

## Exercise 03

```
Create event listeners for the filter buttons so that when clicking them you filter the articles based on the number of likes.
Create a custom JavaScript function for the filtering. See video for reference.
a. filterArticlesByLikes(minLikes, maxLikes)
```

## Exercise 04

```
For each article box, add a button that when clicked, hides the article from DOM.
Optional: You can add a “Show All” button to re-display all the articles if you have hidden some of them.
```
