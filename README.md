<h1 style='text-align:center;'> Trivia Db Quiz App - React JS </h1>

<strong> In this project, I used the most updated React Js futures with Styled Components; I used React Transition Group to animate when to mount or unmount something from DOM. I took data from OPEN TRIVIA DATABASE and showed users different data in different situations with beautiful animations conditionally. The project has a responsive design for all devices with the most updated CSS features. </strong>

<h3>Netlify Link: https://vigilant-allen-2ab416.netlify.com/#/</h3>
&nbsp;

![Main](https://user-images.githubusercontent.com/57728302/76013725-6a789d80-5ee6-11ea-8988-a2a2267d1a04.gif)

<hr>

<strong> Let's start to talk about handling data from API and how I bring it to ready to use. Firstly I am checking whether the user selected a category or difficulty or not. If there is no selection, questions come randomly. At the endpoint, the correct answer was separate from the wrong answers. I put it among the wrong answers randomly with the help of 'Math.random()' and 'splice()' methods. And then, I added 'isCorrect' and 'isSelected' values for each answer. Lastly, I created my ready to use object with a question, answers, category and difficulty values.</strong>

&nbsp;
![a1](https://user-images.githubusercontent.com/57728302/76172727-16341e80-616f-11ea-8954-daea3e187820.png)

&nbsp;

<hr>

<strong> Result : </strong>

&nbsp;
![1](https://user-images.githubusercontent.com/57728302/76015623-6d28c200-5ee9-11ea-98c0-32b948c7c801.png)

&nbsp;

<hr>

<strong> I provide the user three lifeline chances. I want to show how I created the logic for deleting two wrong answers as an example. I created a clone for every variable for setting the state with immutable way and safely. Firstly I detected wrong answers; according to their length, I deleted 2 of them with the help of 'Math.random()', 'splice()' and 'filter()' methods and then sat the state. If there are fewer then three answers, I selected the correct answer right away without waiting for the user's selection. Also, I have 'playSound()' function for playing sound after the user used lifeline chance and 'wrongAnswersDeleted' state for styling button and making it disabled. </strong>

&nbsp;
![a2](https://user-images.githubusercontent.com/57728302/76172728-16341e80-616f-11ea-92ab-b7784161e5c4.png)

&nbsp;

<hr>

<strong> When I handle data from API, there was a character problem; I solved it with replace function.</strong>

&nbsp;
![replaceFunction](https://user-images.githubusercontent.com/57728302/76017572-d231e700-5eec-11ea-9554-b45210256156.JPG)

&nbsp;

<hr>

<strong> I showed the user question's category and difficulty level for each question. When I took data from API, some of them had 'Category: ' part some of them not. I removed 'Category: ' conditionally if they have and added to all of them. With this technic I prevented duplication of 'Category: '. The difficulty level had not capitalized; I made it capitalized with the help of 'toUpperCase()' and 'slice()' methods.</strong>

&nbsp;
![a3](https://user-images.githubusercontent.com/57728302/76172729-16341e80-616f-11ea-8d63-5d4492055628.png)

&nbsp;

<hr>

<strong> At the end of the quiz, I needed to calculate the answered questions. I did it with nested map functions for all questions and their answers if the answer's 'isSelected === true'</strong>

&nbsp;
![a4](https://user-images.githubusercontent.com/57728302/76172730-16341e80-616f-11ea-9e27-a1bcb624b47c.png)

&nbsp;

<hr>

<h2> For Beter User Experience </h2>

&nbsp;

<strong>
If the user doesn't fill the name input area, app fires alert. </br>
If the user doesn't select the category or the difficulty level, the app brings random questions for the unselected section. </br> 
After the user fill up the input name area app doesn't ask username until the user clicks the rename icon.</br>
The Previous button for the first question, the Next button for the last question, lifeline chance buttons if the user doesn't have any unclickable.</br>
If only one answer remains after the user has used the lifeline chances, the application directly selects that answer and prevents using the 'Select Correct Answer' lifeline.</br>
If less than 10 seconds remaining for the quiz, remaining time and it's line change the color, remaining time increases fint-size.</br>
User can see quiz summary at the and of the quiz with selected and correct answers.
</strong>
&nbsp;

<hr>

<h2>CSS</h2>

<strong> For UI design I used 'font-size: 62.5%' technic. Because it is effortless to use and make your design responsive. Now see the picture below. </strong>

&nbsp;
![a5](https://user-images.githubusercontent.com/57728302/76172731-16ccb500-616f-11ea-9a4e-50e4eeebc723.png)

&nbsp;

<hr>

<strong> After I made 0 all margins and paddings for whole dom elements, including before and after elements, I sat the font size to %62.5 with the help of Styled Components createGlobalStyle. It means every one rem equal 10px now. Of course, I could use 10px instead of 1rem. But if you use for your whole parameters; when I start to make the website responsive for small screen devices, all I have to do just decrease the font size and now whole 1rems 8.5px instead of 10. I reached this result with just decreasing HTML font size. Font sizes, margins, paddings, height and widths and even box-shadows have rem value. With a small decrease of HTML font-size value, my website almost full responsive for I tablet except a couple of little things. See the gif below... </strong>

&nbsp;
![responsiveGif](https://user-images.githubusercontent.com/57728302/76023709-ac5e0f80-5ef7-11ea-8f93-ace5c5e87111.gif)

&nbsp;

<hr>

<strong> Curved header with adding the Header '::after' pseudo element. </strong>

&nbsp;
![after](https://user-images.githubusercontent.com/57728302/76023925-2db5a200-5ef8-11ea-8bd1-0ad4cc01f3f5.JPG)

&nbsp;

<hr>

<strong>With the power of the Styled Components, you can see how I animated when the user selects a category or difficulty. For conditional animation I used Styled Components 'css' helper. </strong>

&nbsp;
![a6](https://user-images.githubusercontent.com/57728302/76172732-16ccb500-616f-11ea-9688-aff1635529a1.png)
&nbsp;
![selectaniamtion](https://user-images.githubusercontent.com/57728302/76024307-d95ef200-5ef8-11ea-997a-bacc134a2e1b.gif)

&nbsp;

<hr>

<strong>As you can see, remained time connected with the pseudo-element of the header. It changes color and font size if the user has fewer than 10 seconds.</strong>

&nbsp;
![a7](https://user-images.githubusercontent.com/57728302/76172733-16ccb500-616f-11ea-8dac-96ce591a3c8c.png)
&nbsp;
![remined](https://user-images.githubusercontent.com/57728302/76024905-e29c8e80-5ef9-11ea-8a5f-69fcaff30690.gif)

&nbsp;

<hr>

<strong>I created this beautiful hover-select animation with the help of Styled Components again. I have different transition timings for different CSS properties. Also, with the 'cubic-bezier' property, I made animation more sweeter. </strong>

&nbsp;
![a8](https://user-images.githubusercontent.com/57728302/76172734-17654b80-616f-11ea-88d2-a9356e845823.png)
&nbsp;
![answerAnimation](https://user-images.githubusercontent.com/57728302/76025289-aa498000-5efa-11ea-99d9-bd6611e383ea.gif)

&nbsp;

<hr>

<strong>I made this animation with different animation properties and different animations timings. </strong>

&nbsp;
![a9](https://user-images.githubusercontent.com/57728302/76172735-17654b80-616f-11ea-9bdc-46d23604c064.png)
&nbsp;
![answerslide animation](https://user-images.githubusercontent.com/57728302/76025990-f648f480-5efb-11ea-82bc-a5183e1304ee.gif)

&nbsp;

<hr>

<strong>I accomplished this style and animation with the help of React Transition Group. I could animate while unmounting stats. Also, I showed the user correct and wrong answers with different color and background colors. If the user selects the answer and it is correct or if the user selects the answer and it is incorrect or if the user doesn't select an answer, style changes. With the nested Ternary Operator, I accomplished this result with just one line code. </strong>

&nbsp;
![a10](https://user-images.githubusercontent.com/57728302/76172736-17654b80-616f-11ea-96d2-67f81f52c5f2.png)
&nbsp;
![a11](https://user-images.githubusercontent.com/57728302/76172726-159b8800-616f-11ea-848d-888a51fa941f.png)

&nbsp;

<hr>

&nbsp;
![nested ternary gif](https://user-images.githubusercontent.com/57728302/76026551-001f2780-5efd-11ea-9671-81c1884775b7.gif)

&nbsp;

<hr>

<h3>Netlify Link: https://vigilant-allen-2ab416.netlify.com/#/</h3>
<h4><strong>Used technologies: </strong> React JS (React Hooks, Styled Components, React Transition Group, React Router), HTML, CSS.  </h4>




