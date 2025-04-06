This project has been created using Vite.

1. To scaffold a react project with vite: ```yarn create vite```. For details: https://vite.dev/guide/#scaffolding-your-first-vite-project
2. Now, we want to add tailwindcss to our project. Previously we needed to install autoprefixer, postcss etc. with tailwind for this purpose. Now, we have nice vite support which ease up the tailwind installation.
  - ```yarn add tailwindcss @tailwindcss/vite```
  - Update vite config file
  - Add `@import "tailwindcss";` this line to index.css

For details: https://tailwindcss.com/docs/installation/using-vite

# Project Breakdown:
![alt text](mental-map.png)

Game
  -> Board
    ->Square
  -> History

# Project Planning:
1. Make a Square component with button and call them 9 times in the Board component.
2. Use event handler to handle square click. Use state to implement `X` and `O` value. 'Lifting the state up' method from Square.
  - Use state to the parent component of Square, which is Board. Use array to have the value of each square state. Initially null.
  - We can determine the winner or, 'X','0' which need to be shown on which click, only from the Board component. If we'd used the states on each square, then it will get very complex to find the status after each click.
  - Use event handlers on the squares. Lift the state up from Square.
  - Use setState from parent to update each square.
  - Need to have another state to determine which value the next square will hold. 'X' or, '0'

3. Use a function to calculate the winner. 
  - The function explicitly check the square value for all possible combination to declare the winner.
  - The function return the winner 'X' or '0' if anyone wins it. Otherwise, it sends back to null. So, depending on this, we can show a status and also, avoid the click on the squares.

4. Determine history
  - We need to lift our state up again from Board to Game component. We need to have history to travel like this:
  [
    [null, null, null, ...]
    [null, 'x', null, null, ...] (After 1st move)
    [null, 'x', null, 'o', null, ...] (After 2nd move)...
  ]
  - We need to control all states from Game component. So, for board, we will need to send the latest squares to work with.
  - We need to add a handlePlay function on the Game component, it will handle both next move and set the history with latest squares. We need to call this from Board's handleClick.
  - Event Data flow -> Square (hanldeSquareClick) -> Board (handleClick) -> Game (hanldePlay)
  - Render flow     -> Game re-renders -> Board re-renders -> Square re-renders 
  - Both of the flows are one directional

5. Showing the past moves