# npm create vite slider  // creating vite project
# npm install // installing all npm dependency
# npm run dev // starting app
# npm install react-icons // for icons

# CSS: make person next to each other in x-axis> position: absolute of that person container, parent container of those person container make position:relative, which is stack all person at one place, then transform:translateX according to their index will make person next to each other in x-axis.

# CSS : to make slide
style={{
     transform: `translateX(${100 * (personIndex-index)}%)`,
                  opacity: index === personIndex ? 1 : 0,
                  visibility: index === personIndex ? 'visible' : 'hidden',
    }}


# using react slick 
npm install react-slick --save

npm install slick-carousel --save

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


