import breakfast from "../images/NewFolder/brkfst.PNG";
import lunch from "../images/NewFolder/lnch.PNG";
import snacks from "../images/NewFolder/sncks.jpg";
import dinner from "../images/NewFolder/dnr.PNG";
import drink from "../images/NewFolder/drnk.PNG";
import nightlife from "../images/NewFolder/ntlf.jpg";

export const restaurantList = [
    {
        id: 1,
        image: "https://i.ibb.co/yY2BdBc/res4.jpg",
        name: "The Big Chill Cakery",
        place: "Sarjapur Road",
        location: "Bengaluru",
        phNo: 8944827500,
        cuisines: "North Indian, Chinese",
        costForTwo: 200,
        rating: 4.2,
        menu: [{
            id: 1,
            type: "Mocktail",
            name: "Summerberry Cooler",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            // type: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/tsWkNM7/Summerberry.png",
            recipes: "Raspberry, apple juice, strawberry and concentrated lemonade altogether make for a frosty summer treat that everyone will adore.",
            price: 120
        },
        {
            id: 2,
            type: "Mocktail",
            name: "Citrus Strawberry Mocktail",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/87PRNWQ/Strawberry.png",
            recipes: "Refresh and rehydrate with this citrusy drink! Several ingredients combine to create this colorful treat, made with strawberry, orange juice, icing sugar, sparkling powder, and a hint of basil.",
            price: 140
        },
        {
            id: 3,
            type: "Mocktail",
            name: "Sparkling Cherry Limeade",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/jy7zZVL/Cherry.png",
            recipes: "Cherry juice, lemon wedges, lime juice and sugar pair together deliciously with sparkling water. This is just what you need!",
            price: 100
        },
        {
            id: 4,
            type: "Mocktail",
            name: "Mint Zing",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/S6m728W/MintZing.png",
            recipes: "Quench your thirst with this refreshing drink, loaded with fresh fruits and herbs. It's a low calorie sweet fruity drink that will give your digestive system a healthy boost!",
            price: 120
        },
        {
            id: 5,
            type: "Mocktail",
            name: "Beach Tropicana",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/r5Bt5Hs/Tropicana.png",
            recipes: "The flavor combination is so addictive you'll find yourself craving for more.",
            price: 130
        },
        {
            id: 6,
            type: "Indian Main Course Veg",
            name: "Paneer Butter Masala",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/Lt4BcNF/Paneer1.png",
            recipes: "Paneer Butter Masala is one of India’s most popular paneer recipe. This recipe with Indian cottage cheese cubes in a creamy tomato sauce is a best one that I have been making for a long time.",
            price: 150
        },
        {
            id: 7,
            type: "Indian Main Course Veg",
            name: "Paneer Manchurian",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/vPmnZJr/Paneer2.png",
            recipes: "This Paneer Manchurian Gravy of crispy paneer cubes in a sour & umami gravy or sauce. You will find this Paneer Manchurian with sauce in many restaurants serving Chinese food.",
            price: 120
        },
        {
            id: 8,
            type: "Indian Main Course Veg",
            name: "Baby Corn Manchurian",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/GRTPkCy/Babycorn.png",
            recipes: "The recipe of Baby corn manchurian gravy has spicy, sweet, umami and sour tastes that taste great with veg fried rice or veg noodles or hakka noodles.",
            price: 180
        },
        {
            id: 9,
            type: "Indian Main Course Veg",
            name: "Kadai Mushroom",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/QkTv6k3/Mushroom.png",
            recipes: "Kadai Mushroom is such a super easy and delicious dish of sautéed button mushrooms, onions, bell peppers (capsicum) in a spiced, tangy tomato sauce. The recipe comes together in 30 minutes and so delish with naan, roti and even bread rolls.",
            price: 150
        },
        {
            id: 10,
            type: "Indian Main Course Veg",
            name: "Mushroom manchurian",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/CP7pkzP/Mushroom1.png",
            recipes: "For all mushroom lovers, this is another fantastic spicy Indo Chinese recipe of mushroom manchurian dry. A vegan dish",
            price: 180
        },
        {
            id: 11,
            type: "Rice and Biryani",
            name: "Veg Pulao",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/25wsRg4/Pulao.png",
            recipes: "Pulao or pilaf, is comfort food at its best. This one-pot dish made with rice and vegetables has added spices and herbs, giving it a mild aromatic flavor. The dish is also vegetarian and is great on its own or paired with raita (an Indian yogurt dish), pickle and roasted papad (a crisp thin Indian snack).",
            price: 180
        },
        {
            id: 12,
            type: "Rice and Biryani",
            name: "Kashmiri Pulao",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/zb8zGPg/pulao1.png",
            recipes: "My recipe for Kashmiri Pulao is packed with toasted nuts and warming spices for an aromatic rice dish that is mild and faintly sweet in taste. Whether you serve this gluten-free and vegetarian dish as a side or light lunch, you’re sure to love it.",
            price: 220
        },
        {
            id: 13,
            type: "Rice and Biryani",
            name: "Fried Rice",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/nsQsVsF/Fried-Rice.png",
            recipes: "This classic fried rice recipe is loaded with fresh mixed veggies and aromatic spices for an incredibly hearty, flavorful vegan dish. Hands-down this is one of our favorite Chinese-inspired recipes. Not only is vegetable fried rice amazingly easy to make from scratch, a naturally vegan dish that's as good for you as it is delicious to eat. You can even tweak veg fried rice to be gluten-free simply by using GF-friendly soy sauce or tamari.",
            price: 200
        },
        {
            id: 14,
            type: "Rice and Biryani",
            name: "Chicken Biryani ",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/jwZ4RQj/Biryani.png",
            recipes: "Chicken Biryani is a savory chicken and rice dish that includes layers of chicken, rice, and aromatics that are steamed together. The bottom layer of rice absorbs all the chicken juices as it cooks, giving it a tender texture and rich flavor, while the top layer of rice turns out white and fluffy. Buried in the Biryani, you’ll find whole cuts of succulent chicken bursting with flavor from the potent array of spices, herbs, and aromatics it’s marinated in.",
            price: 200
        },
        {
            id: 15,
            type: "Rice and Biryani",
            name: "Mutton Biryani",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/VgmDn7Q/Biryani2.png",
            recipes: "This mutton biryani recipe has layers of mutton and saffron-milk infused rice cooked 'dum' style. It has a host of aromatic spices and herbs such as star anise, bay leaves, cardamom, cinnamon, cloves, jaiphal, and javitri along with chillies, rose water, kewda and saffron cooked with succulent mutton pieces.",
            price: 250
        },
        {
            id: 16,
            type: "Pizza",
            name: "Margherita pizza",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/zHkj4Qv/pizza.png",
            recipes: "Everyone loves pizza, and we’re starting off this awesome list with a margherita pizza that you can make in a skillet. It’s filled with fresh mozzarella, ripe tomatoes, and basil leaves. It’s also got a perfect crispy golden crust!",
            price: 180
        },
        {
            id: 17,
            type: "Pizza",
            name: "Chicken pizza",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/P9TZdzj/pizza1.png",
            recipes: "This Italian favorite pizza is a delicious mix of flat bread or base topped with cheese, chillies, onion, garlic sauce and chunks of chicken. Explore the juiciness of meaty chicken chunks embedded in gooey cheesiness. It can't get better than this.",
            price: 220
        },
        {
            id: 18,
            type: "Pizza",
            name: " Kebab and Paneer Pizza",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/M2bVHCG/pizza2.png",
            recipes: "Think out-of-the-box-cooking, think fusion food. This is what you get when Italian cooking marries Indian flavours. A mouth watering pizza recipe that is sure to tantalize your taste buds. This fusion of Mughlai seekh kebab and Italian pizza recipe is easy and quick.",
            price: 250
        },
        {
            id: 19,
            type: "Pizza",
            name: "bacon breakfast pizza",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/yRSRxbx/pizza3.png",
            recipes: "Sometimes, you just want pizza for breakfast. Why not make this bacon breakfast pizza, so you can enjoy the tasty pizza, while still using traditional breakfast ingredients like crispy bacon and eggs that are perfectly cooked.",
            price: 200
        },
        {
            id: 20,
            type: "Pizza",
            name: "Vegetarian Pizza",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/C7yqH3S/pizza4.png",
            recipes: "Garden fresh veggies come together to create a delicious symphony for your taste-buds. Lots of variety and a harmony of flavours teamed with unmatchable cheesiness, heavenly indeed! This special vegetarian pizza recipe will be loved by kids and adults alike.",
            price: 220
        },
        {
            id: 21,
            type: "Burgers",
            name: "Chilli burger ",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/bgG0013/burger.png",
            recipes: "This scrumptious burger sits under a chilli lamb pattie, roasted bell pepper dip, onions, tomatoes and lettuce.",
            price: 100
        },
        {
            id: 22,
            type: "Burgers",
            name: "Crunchy Chicken and Fish Burger",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/Pc1sGhB/burger1.png",
            recipes: "If a burger for you is all about the meat and protein then you're at the right place. Experience the goodness of chicken, fish and a tangy hot and sour sauce.",
            price: 150
        },
        {
            id: 23,
            type: "Burgers",
            name: "Chicken Feta Cheese Burger",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/0VqGdZX/burger2.png",
            recipes: "Chicken mince marinated with salt, pepper and feta cheese is only the beginning of this ultimate wonder. To accompany this we've got a guilt free potato salad with a yogurt dressing.",
            price: 150
        },
        {
            id: 24,
            type: "Burgers",
            name: "Lentil and Mushroom Burger",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/L1yQLYq/burger3.png",
            recipes: "For the healthy and calorie conscious folks we've got this tasty burger. A lentil, mushroom and sun dried tomato pattie packed between a whole wheat bun.",
            price: 120
        },
        {
            id: 25,
            type: "Burgers",
            name: "Butter Chicken Twin Burgers",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/ctKTdV7/burger4.png",
            recipes: "Made with chicken tikka coated in spicy, delicious makhani gravy filled inside a burger bun. Butter chicken twin burgers are a tasty snack or appetizer for kids and adults alike!.",
            price: 130
        },
        {
            id: 26,
            type: "Sandwich",
            name: "Dahi Sandwich",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/9yq3vTh/sandwich.png",
            recipes: "This Indian version is made using yogurt, and it looks like thick cream cheese. It works as a lovely, creamy base into which you’ll add crunchy diced veggies and a few spices. Fill the bread and cook on medium heat until the outside is golden and the middle is warmed through.",
            price: 80
        },
        {
            id: 27,
            type: "Sandwich",
            name: "Aloo Toast Sandwich",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/0FvkBZZ/sandwich1.png",
            recipes: "Aloo is the Hindi word for potato, and it’s a popular ingredient in Indian cooking. I knew I’d love this recipe once I saw the combination of warm spices and luscious chutney. And it all starts with simple, boiled potatoes. ",
            price: 60
        },
        {
            id: 28,
            type: "Sandwich",
            name: "Indian Bread Omelette",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/JymLshB/sandwich2.png",
            recipes: "Although this sandwich isn’t loaded with spice, it’s actually a super traditional street food in India.You’ll find it at vendors all over the place, and I love that the recipe has gone viral.After all, what could be better than egg-dipped bread wrapped in cheese, served crispy with bacon and scallions.It takes minutes to throw together, and it will fill you up all day long.",
            price: 40
        },
        {
            id: 29,
            type: "Sandwich",
            name: "Paneer Sandwich Recipe",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/7YDqsML/sandwich3.png",
            recipes: "Paneer is a milky type of soft cheese that looks just like cheese curds, though the texture is more like feta (crumbly).It’s sliceable and super mild, and since it doesn’t melt like regular cheese, it holds its shape in everything from toasted sandwiches to curries. Mix it with veggies, spices, and a little tomato paste for something pretty unique and hard to resist.",
            price: 80
        },
        {
            id: 30,
            type: "Sandwich",
            name: "Avocado Tandoori Chicken Sandwich",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/ryk2SmB/sandwich4.png",
            recipes: "First of all, how amazing does this Indian sandwich look? That bright green against the vibrant tandoori chicken has me drooling. And it tastes even better than it looks. Keep it simple with smashed avocado and chicken, or ramp it up with some crunchy red onions and green chilies.",
            price: 100
        },]
    },
    {
        id: 2,
        image: "https://i.ibb.co/JpNKDDg/res5.jpg",
        name: "Punjabi Rasoi",
        place: "HSR Layout",
        location: "Bengaluru",
        phNo: 8944827501,
        cuisines: "North Indian, Fast Food",
        costForTwo: 300,
        rating: 4.3,
        menu: [{
            id: 1,
            type: "Mocktail",
            name: "Summerberry Cooler",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            // type: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/tsWkNM7/Summerberry.png",
            recipes: "Raspberry, apple juice, strawberry and concentrated lemonade altogether make for a frosty summer treat that everyone will adore.",
            price: 120
        },
        {
            id: 2,
            type: "Mocktail",
            name: "Citrus Strawberry Mocktail",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/87PRNWQ/Strawberry.png",
            recipes: "Refresh and rehydrate with this citrusy drink! Several ingredients combine to create this colorful treat, made with strawberry, orange juice, icing sugar, sparkling powder, and a hint of basil.",
            price: 140
        },
        {
            id: 3,
            type: "Mocktail",
            name: "Sparkling Cherry Limeade",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/jy7zZVL/Cherry.png",
            recipes: "Cherry juice, lemon wedges, lime juice and sugar pair together deliciously with sparkling water. This is just what you need!",
            price: 100
        },
        {
            id: 4,
            type: "Mocktail",
            name: "Mint Zing",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/S6m728W/MintZing.png",
            recipes: "Quench your thirst with this refreshing drink, loaded with fresh fruits and herbs. It's a low calorie sweet fruity drink that will give your digestive system a healthy boost!",
            price: 120
        },
        {
            id: 5,
            type: "Mocktail",
            name: "Beach Tropicana",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/r5Bt5Hs/Tropicana.png",
            recipes: "The flavor combination is so addictive you'll find yourself craving for more.",
            price: 130
        },
        {
            id: 6,
            type: "Indian Main Course Veg",
            name: "Paneer Butter Masala",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/Lt4BcNF/Paneer1.png",
            recipes: "Paneer Butter Masala is one of India’s most popular paneer recipe. This recipe with Indian cottage cheese cubes in a creamy tomato sauce is a best one that I have been making for a long time.",
            price: 150
        },
        {
            id: 7,
            type: "Indian Main Course Veg",
            name: "Paneer Manchurian",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/vPmnZJr/Paneer2.png",
            recipes: "This Paneer Manchurian Gravy of crispy paneer cubes in a sour & umami gravy or sauce. You will find this Paneer Manchurian with sauce in many restaurants serving Chinese food.",
            price: 120
        },
        {
            id: 8,
            type: "Indian Main Course Veg",
            name: "Baby Corn Manchurian",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/GRTPkCy/Babycorn.png",
            recipes: "The recipe of Baby corn manchurian gravy has spicy, sweet, umami and sour tastes that taste great with veg fried rice or veg noodles or hakka noodles.",
            price: 180
        },
        {
            id: 9,
            type: "Indian Main Course Veg",
            name: "Kadai Mushroom",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/QkTv6k3/Mushroom.png",
            recipes: "Kadai Mushroom is such a super easy and delicious dish of sautéed button mushrooms, onions, bell peppers (capsicum) in a spiced, tangy tomato sauce. The recipe comes together in 30 minutes and so delish with naan, roti and even bread rolls.",
            price: 150
        },
        {
            id: 10,
            type: "Indian Main Course Veg",
            name: "Mushroom manchurian",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/CP7pkzP/Mushroom1.png",
            recipes: "For all mushroom lovers, this is another fantastic spicy Indo Chinese recipe of mushroom manchurian dry. A vegan dish",
            price: 180
        },
        {
            id: 11,
            type: "Rice and Biryani",
            name: "Veg Pulao",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/25wsRg4/Pulao.png",
            recipes: "Pulao or pilaf, is comfort food at its best. This one-pot dish made with rice and vegetables has added spices and herbs, giving it a mild aromatic flavor. The dish is also vegetarian and is great on its own or paired with raita (an Indian yogurt dish), pickle and roasted papad (a crisp thin Indian snack).",
            price: 180
        },
        {
            id: 12,
            type: "Rice and Biryani",
            name: "Kashmiri Pulao",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/zb8zGPg/pulao1.png",
            recipes: "My recipe for Kashmiri Pulao is packed with toasted nuts and warming spices for an aromatic rice dish that is mild and faintly sweet in taste. Whether you serve this gluten-free and vegetarian dish as a side or light lunch, you’re sure to love it.",
            price: 220
        },
        {
            id: 13,
            type: "Rice and Biryani",
            name: "Fried Rice",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/nsQsVsF/Fried-Rice.png",
            recipes: "This classic fried rice recipe is loaded with fresh mixed veggies and aromatic spices for an incredibly hearty, flavorful vegan dish. Hands-down this is one of our favorite Chinese-inspired recipes. Not only is vegetable fried rice amazingly easy to make from scratch, a naturally vegan dish that's as good for you as it is delicious to eat. You can even tweak veg fried rice to be gluten-free simply by using GF-friendly soy sauce or tamari.",
            price: 200
        },
        {
            id: 14,
            type: "Rice and Biryani",
            name: "Chicken Biryani ",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/jwZ4RQj/Biryani.png",
            recipes: "Chicken Biryani is a savory chicken and rice dish that includes layers of chicken, rice, and aromatics that are steamed together. The bottom layer of rice absorbs all the chicken juices as it cooks, giving it a tender texture and rich flavor, while the top layer of rice turns out white and fluffy. Buried in the Biryani, you’ll find whole cuts of succulent chicken bursting with flavor from the potent array of spices, herbs, and aromatics it’s marinated in.",
            price: 200
        },
        {
            id: 15,
            type: "Rice and Biryani",
            name: "Mutton Biryani",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/VgmDn7Q/Biryani2.png",
            recipes: "This mutton biryani recipe has layers of mutton and saffron-milk infused rice cooked 'dum' style. It has a host of aromatic spices and herbs such as star anise, bay leaves, cardamom, cinnamon, cloves, jaiphal, and javitri along with chillies, rose water, kewda and saffron cooked with succulent mutton pieces.",
            price: 250
        },
        {
            id: 16,
            type: "Pizza",
            name: "Margherita pizza",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/zHkj4Qv/pizza.png",
            recipes: "Everyone loves pizza, and we’re starting off this awesome list with a margherita pizza that you can make in a skillet. It’s filled with fresh mozzarella, ripe tomatoes, and basil leaves. It’s also got a perfect crispy golden crust!",
            price: 180
        },
        {
            id: 17,
            type: "Pizza",
            name: "Chicken pizza",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/P9TZdzj/pizza1.png",
            recipes: "This Italian favorite pizza is a delicious mix of flat bread or base topped with cheese, chillies, onion, garlic sauce and chunks of chicken. Explore the juiciness of meaty chicken chunks embedded in gooey cheesiness. It can't get better than this.",
            price: 220
        },
        {
            id: 18,
            type: "Pizza",
            name: " Kebab and Paneer Pizza",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/M2bVHCG/pizza2.png",
            recipes: "Think out-of-the-box-cooking, think fusion food. This is what you get when Italian cooking marries Indian flavours. A mouth watering pizza recipe that is sure to tantalize your taste buds. This fusion of Mughlai seekh kebab and Italian pizza recipe is easy and quick.",
            price: 250
        },
        {
            id: 19,
            type: "Pizza",
            name: "bacon breakfast pizza",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/yRSRxbx/pizza3.png",
            recipes: "Sometimes, you just want pizza for breakfast. Why not make this bacon breakfast pizza, so you can enjoy the tasty pizza, while still using traditional breakfast ingredients like crispy bacon and eggs that are perfectly cooked.",
            price: 200
        },
        {
            id: 20,
            type: "Pizza",
            name: "Vegetarian Pizza",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/C7yqH3S/pizza4.png",
            recipes: "Garden fresh veggies come together to create a delicious symphony for your taste-buds. Lots of variety and a harmony of flavours teamed with unmatchable cheesiness, heavenly indeed! This special vegetarian pizza recipe will be loved by kids and adults alike.",
            price: 220
        },
        {
            id: 21,
            type: "Burgers",
            name: "Chilli burger ",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/bgG0013/burger.png",
            recipes: "This scrumptious burger sits under a chilli lamb pattie, roasted bell pepper dip, onions, tomatoes and lettuce.",
            price: 100
        },
        {
            id: 22,
            type: "Burgers",
            name: "Crunchy Chicken and Fish Burger",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/Pc1sGhB/burger1.png",
            recipes: "If a burger for you is all about the meat and protein then you're at the right place. Experience the goodness of chicken, fish and a tangy hot and sour sauce.",
            price: 150
        },
        {
            id: 23,
            type: "Burgers",
            name: "Chicken Feta Cheese Burger",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/0VqGdZX/burger2.png",
            recipes: "Chicken mince marinated with salt, pepper and feta cheese is only the beginning of this ultimate wonder. To accompany this we've got a guilt free potato salad with a yogurt dressing.",
            price: 150
        },
        {
            id: 24,
            type: "Burgers",
            name: "Lentil and Mushroom Burger",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/L1yQLYq/burger3.png",
            recipes: "For the healthy and calorie conscious folks we've got this tasty burger. A lentil, mushroom and sun dried tomato pattie packed between a whole wheat bun.",
            price: 120
        },
        {
            id: 25,
            type: "Burgers",
            name: "Butter Chicken Twin Burgers",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/ctKTdV7/burger4.png",
            recipes: "Made with chicken tikka coated in spicy, delicious makhani gravy filled inside a burger bun. Butter chicken twin burgers are a tasty snack or appetizer for kids and adults alike!.",
            price: 130
        },
        {
            id: 26,
            type: "Sandwich",
            name: "Dahi Sandwich",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/9yq3vTh/sandwich.png",
            recipes: "This Indian version is made using yogurt, and it looks like thick cream cheese. It works as a lovely, creamy base into which you’ll add crunchy diced veggies and a few spices. Fill the bread and cook on medium heat until the outside is golden and the middle is warmed through.",
            price: 80
        },
        {
            id: 27,
            type: "Sandwich",
            name: "Aloo Toast Sandwich",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/0FvkBZZ/sandwich1.png",
            recipes: "Aloo is the Hindi word for potato, and it’s a popular ingredient in Indian cooking. I knew I’d love this recipe once I saw the combination of warm spices and luscious chutney. And it all starts with simple, boiled potatoes. ",
            price: 60
        },
        {
            id: 28,
            type: "Sandwich",
            name: "Indian Bread Omelette",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/JymLshB/sandwich2.png",
            recipes: "Although this sandwich isn’t loaded with spice, it’s actually a super traditional street food in India.You’ll find it at vendors all over the place, and I love that the recipe has gone viral.After all, what could be better than egg-dipped bread wrapped in cheese, served crispy with bacon and scallions.It takes minutes to throw together, and it will fill you up all day long.",
            price: 40
        },
        {
            id: 29,
            type: "Sandwich",
            name: "Paneer Sandwich Recipe",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/7YDqsML/sandwich3.png",
            recipes: "Paneer is a milky type of soft cheese that looks just like cheese curds, though the texture is more like feta (crumbly).It’s sliceable and super mild, and since it doesn’t melt like regular cheese, it holds its shape in everything from toasted sandwiches to curries. Mix it with veggies, spices, and a little tomato paste for something pretty unique and hard to resist.",
            price: 80
        },
        {
            id: 30,
            type: "Sandwich",
            name: "Avocado Tandoori Chicken Sandwich",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/ryk2SmB/sandwich4.png",
            recipes: "First of all, how amazing does this Indian sandwich look? That bright green against the vibrant tandoori chicken has me drooling. And it tastes even better than it looks. Keep it simple with smashed avocado and chicken, or ramp it up with some crunchy red onions and green chilies.",
            price: 100
        },]
    },
    {
        id: 3,
        image: "https://i.ibb.co/d0mYmyS/res6.jpg",
        name: "Punjabi Dhaba",
        place: "Kormangala",
        location: "Bengaluru",
        phNo: 8944827502,
        cuisines: "Fast Food, Chinese",
        costForTwo: 400,
        rating: 4,
        menu: [{
            id: 1,
            type: "Mocktail",
            name: "Summerberry Cooler",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            // type: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/tsWkNM7/Summerberry.png",
            recipes: "Raspberry, apple juice, strawberry and concentrated lemonade altogether make for a frosty summer treat that everyone will adore.",
            price: 120
        },
        {
            id: 2,
            type: "Mocktail",
            name: "Citrus Strawberry Mocktail",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/87PRNWQ/Strawberry.png",
            recipes: "Refresh and rehydrate with this citrusy drink! Several ingredients combine to create this colorful treat, made with strawberry, orange juice, icing sugar, sparkling powder, and a hint of basil.",
            price: 140
        },
        {
            id: 3,
            type: "Mocktail",
            name: "Sparkling Cherry Limeade",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/jy7zZVL/Cherry.png",
            recipes: "Cherry juice, lemon wedges, lime juice and sugar pair together deliciously with sparkling water. This is just what you need!",
            price: 100
        },
        {
            id: 4,
            type: "Mocktail",
            name: "Mint Zing",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/S6m728W/MintZing.png",
            recipes: "Quench your thirst with this refreshing drink, loaded with fresh fruits and herbs. It's a low calorie sweet fruity drink that will give your digestive system a healthy boost!",
            price: 120
        },
        {
            id: 5,
            type: "Mocktail",
            name: "Beach Tropicana",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/r5Bt5Hs/Tropicana.png",
            recipes: "The flavor combination is so addictive you'll find yourself craving for more.",
            price: 130
        },
        {
            id: 6,
            type: "Indian Main Course Veg",
            name: "Paneer Butter Masala",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/Lt4BcNF/Paneer1.png",
            recipes: "Paneer Butter Masala is one of India’s most popular paneer recipe. This recipe with Indian cottage cheese cubes in a creamy tomato sauce is a best one that I have been making for a long time.",
            price: 150
        },
        {
            id: 7,
            type: "Indian Main Course Veg",
            name: "Paneer Manchurian",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/vPmnZJr/Paneer2.png",
            recipes: "This Paneer Manchurian Gravy of crispy paneer cubes in a sour & umami gravy or sauce. You will find this Paneer Manchurian with sauce in many restaurants serving Chinese food.",
            price: 120
        },
        {
            id: 8,
            type: "Indian Main Course Veg",
            name: "Baby Corn Manchurian",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/GRTPkCy/Babycorn.png",
            recipes: "The recipe of Baby corn manchurian gravy has spicy, sweet, umami and sour tastes that taste great with veg fried rice or veg noodles or hakka noodles.",
            price: 180
        },
        {
            id: 9,
            type: "Indian Main Course Veg",
            name: "Kadai Mushroom",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/QkTv6k3/Mushroom.png",
            recipes: "Kadai Mushroom is such a super easy and delicious dish of sautéed button mushrooms, onions, bell peppers (capsicum) in a spiced, tangy tomato sauce. The recipe comes together in 30 minutes and so delish with naan, roti and even bread rolls.",
            price: 150
        },
        {
            id: 10,
            type: "Indian Main Course Veg",
            name: "Mushroom manchurian",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/CP7pkzP/Mushroom1.png",
            recipes: "For all mushroom lovers, this is another fantastic spicy Indo Chinese recipe of mushroom manchurian dry. A vegan dish",
            price: 180
        },
        {
            id: 11,
            type: "Rice and Biryani",
            name: "Veg Pulao",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/25wsRg4/Pulao.png",
            recipes: "Pulao or pilaf, is comfort food at its best. This one-pot dish made with rice and vegetables has added spices and herbs, giving it a mild aromatic flavor. The dish is also vegetarian and is great on its own or paired with raita (an Indian yogurt dish), pickle and roasted papad (a crisp thin Indian snack).",
            price: 180
        },
        {
            id: 12,
            type: "Rice and Biryani",
            name: "Kashmiri Pulao",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/zb8zGPg/pulao1.png",
            recipes: "My recipe for Kashmiri Pulao is packed with toasted nuts and warming spices for an aromatic rice dish that is mild and faintly sweet in taste. Whether you serve this gluten-free and vegetarian dish as a side or light lunch, you’re sure to love it.",
            price: 220
        },
        {
            id: 13,
            type: "Rice and Biryani",
            name: "Fried Rice",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/nsQsVsF/Fried-Rice.png",
            recipes: "This classic fried rice recipe is loaded with fresh mixed veggies and aromatic spices for an incredibly hearty, flavorful vegan dish. Hands-down this is one of our favorite Chinese-inspired recipes. Not only is vegetable fried rice amazingly easy to make from scratch, a naturally vegan dish that's as good for you as it is delicious to eat. You can even tweak veg fried rice to be gluten-free simply by using GF-friendly soy sauce or tamari.",
            price: 200
        },
        {
            id: 14,
            type: "Rice and Biryani",
            name: "Chicken Biryani ",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/jwZ4RQj/Biryani.png",
            recipes: "Chicken Biryani is a savory chicken and rice dish that includes layers of chicken, rice, and aromatics that are steamed together. The bottom layer of rice absorbs all the chicken juices as it cooks, giving it a tender texture and rich flavor, while the top layer of rice turns out white and fluffy. Buried in the Biryani, you’ll find whole cuts of succulent chicken bursting with flavor from the potent array of spices, herbs, and aromatics it’s marinated in.",
            price: 200
        },
        {
            id: 15,
            type: "Rice and Biryani",
            name: "Mutton Biryani",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/VgmDn7Q/Biryani2.png",
            recipes: "This mutton biryani recipe has layers of mutton and saffron-milk infused rice cooked 'dum' style. It has a host of aromatic spices and herbs such as star anise, bay leaves, cardamom, cinnamon, cloves, jaiphal, and javitri along with chillies, rose water, kewda and saffron cooked with succulent mutton pieces.",
            price: 250
        },
        {
            id: 16,
            type: "Pizza",
            name: "Margherita pizza",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/zHkj4Qv/pizza.png",
            recipes: "Everyone loves pizza, and we’re starting off this awesome list with a margherita pizza that you can make in a skillet. It’s filled with fresh mozzarella, ripe tomatoes, and basil leaves. It’s also got a perfect crispy golden crust!",
            price: 180
        },
        {
            id: 17,
            type: "Pizza",
            name: "Chicken pizza",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/P9TZdzj/pizza1.png",
            recipes: "This Italian favorite pizza is a delicious mix of flat bread or base topped with cheese, chillies, onion, garlic sauce and chunks of chicken. Explore the juiciness of meaty chicken chunks embedded in gooey cheesiness. It can't get better than this.",
            price: 220
        },
        {
            id: 18,
            type: "Pizza",
            name: " Kebab and Paneer Pizza",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/M2bVHCG/pizza2.png",
            recipes: "Think out-of-the-box-cooking, think fusion food. This is what you get when Italian cooking marries Indian flavours. A mouth watering pizza recipe that is sure to tantalize your taste buds. This fusion of Mughlai seekh kebab and Italian pizza recipe is easy and quick.",
            price: 250
        },
        {
            id: 19,
            type: "Pizza",
            name: "bacon breakfast pizza",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/yRSRxbx/pizza3.png",
            recipes: "Sometimes, you just want pizza for breakfast. Why not make this bacon breakfast pizza, so you can enjoy the tasty pizza, while still using traditional breakfast ingredients like crispy bacon and eggs that are perfectly cooked.",
            price: 200
        },
        {
            id: 20,
            type: "Pizza",
            name: "Vegetarian Pizza",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/C7yqH3S/pizza4.png",
            recipes: "Garden fresh veggies come together to create a delicious symphony for your taste-buds. Lots of variety and a harmony of flavours teamed with unmatchable cheesiness, heavenly indeed! This special vegetarian pizza recipe will be loved by kids and adults alike.",
            price: 220
        },
        {
            id: 21,
            type: "Burgers",
            name: "Chilli burger ",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/bgG0013/burger.png",
            recipes: "This scrumptious burger sits under a chilli lamb pattie, roasted bell pepper dip, onions, tomatoes and lettuce.",
            price: 100
        },
        {
            id: 22,
            type: "Burgers",
            name: "Crunchy Chicken and Fish Burger",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/Pc1sGhB/burger1.png",
            recipes: "If a burger for you is all about the meat and protein then you're at the right place. Experience the goodness of chicken, fish and a tangy hot and sour sauce.",
            price: 150
        },
        {
            id: 23,
            type: "Burgers",
            name: "Chicken Feta Cheese Burger",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/0VqGdZX/burger2.png",
            recipes: "Chicken mince marinated with salt, pepper and feta cheese is only the beginning of this ultimate wonder. To accompany this we've got a guilt free potato salad with a yogurt dressing.",
            price: 150
        },
        {
            id: 24,
            type: "Burgers",
            name: "Lentil and Mushroom Burger",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/L1yQLYq/burger3.png",
            recipes: "For the healthy and calorie conscious folks we've got this tasty burger. A lentil, mushroom and sun dried tomato pattie packed between a whole wheat bun.",
            price: 120
        },
        {
            id: 25,
            type: "Burgers",
            name: "Butter Chicken Twin Burgers",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/ctKTdV7/burger4.png",
            recipes: "Made with chicken tikka coated in spicy, delicious makhani gravy filled inside a burger bun. Butter chicken twin burgers are a tasty snack or appetizer for kids and adults alike!.",
            price: 130
        },
        {
            id: 26,
            type: "Sandwich",
            name: "Dahi Sandwich",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/9yq3vTh/sandwich.png",
            recipes: "This Indian version is made using yogurt, and it looks like thick cream cheese. It works as a lovely, creamy base into which you’ll add crunchy diced veggies and a few spices. Fill the bread and cook on medium heat until the outside is golden and the middle is warmed through.",
            price: 80
        },
        {
            id: 27,
            type: "Sandwich",
            name: "Aloo Toast Sandwich",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/0FvkBZZ/sandwich1.png",
            recipes: "Aloo is the Hindi word for potato, and it’s a popular ingredient in Indian cooking. I knew I’d love this recipe once I saw the combination of warm spices and luscious chutney. And it all starts with simple, boiled potatoes. ",
            price: 60
        },
        {
            id: 28,
            type: "Sandwich",
            name: "Indian Bread Omelette",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/JymLshB/sandwich2.png",
            recipes: "Although this sandwich isn’t loaded with spice, it’s actually a super traditional street food in India.You’ll find it at vendors all over the place, and I love that the recipe has gone viral.After all, what could be better than egg-dipped bread wrapped in cheese, served crispy with bacon and scallions.It takes minutes to throw together, and it will fill you up all day long.",
            price: 40
        },
        {
            id: 29,
            type: "Sandwich",
            name: "Paneer Sandwich Recipe",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/7YDqsML/sandwich3.png",
            recipes: "Paneer is a milky type of soft cheese that looks just like cheese curds, though the texture is more like feta (crumbly).It’s sliceable and super mild, and since it doesn’t melt like regular cheese, it holds its shape in everything from toasted sandwiches to curries. Mix it with veggies, spices, and a little tomato paste for something pretty unique and hard to resist.",
            price: 80
        },
        {
            id: 30,
            type: "Sandwich",
            name: "Avocado Tandoori Chicken Sandwich",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/ryk2SmB/sandwich4.png",
            recipes: "First of all, how amazing does this Indian sandwich look? That bright green against the vibrant tandoori chicken has me drooling. And it tastes even better than it looks. Keep it simple with smashed avocado and chicken, or ramp it up with some crunchy red onions and green chilies.",
            price: 100
        },]
    },
    {
        id: 4,
        image: "https://i.ibb.co/N229MJ5/res7.jpg",
        name: "Malva Restaurant",
        place: "Patia",
        location: "Bhubaneswar",
        phNo: 8944827503,
        cuisines: "North Indian, Chinese",
        costForTwo: 400,
        rating: 4,
        menu: [{
            id: 1,
            type: "Mocktail",
            name: "Summerberry Cooler",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            // type: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/tsWkNM7/Summerberry.png",
            recipes: "Raspberry, apple juice, strawberry and concentrated lemonade altogether make for a frosty summer treat that everyone will adore.",
            price: 120
        },
        {
            id: 2,
            type: "Mocktail",
            name: "Citrus Strawberry Mocktail",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/87PRNWQ/Strawberry.png",
            recipes: "Refresh and rehydrate with this citrusy drink! Several ingredients combine to create this colorful treat, made with strawberry, orange juice, icing sugar, sparkling powder, and a hint of basil.",
            price: 140
        },
        {
            id: 3,
            type: "Mocktail",
            name: "Sparkling Cherry Limeade",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/jy7zZVL/Cherry.png",
            recipes: "Cherry juice, lemon wedges, lime juice and sugar pair together deliciously with sparkling water. This is just what you need!",
            price: 100
        },
        {
            id: 4,
            type: "Mocktail",
            name: "Mint Zing",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/S6m728W/MintZing.png",
            recipes: "Quench your thirst with this refreshing drink, loaded with fresh fruits and herbs. It's a low calorie sweet fruity drink that will give your digestive system a healthy boost!",
            price: 120
        },
        {
            id: 5,
            type: "Mocktail",
            name: "Beach Tropicana",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/r5Bt5Hs/Tropicana.png",
            recipes: "The flavor combination is so addictive you'll find yourself craving for more.",
            price: 130
        },
        {
            id: 6,
            type: "Indian Main Course Veg",
            name: "Paneer Butter Masala",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/Lt4BcNF/Paneer1.png",
            recipes: "Paneer Butter Masala is one of India’s most popular paneer recipe. This recipe with Indian cottage cheese cubes in a creamy tomato sauce is a best one that I have been making for a long time.",
            price: 150
        },
        {
            id: 7,
            type: "Indian Main Course Veg",
            name: "Paneer Manchurian",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/vPmnZJr/Paneer2.png",
            recipes: "This Paneer Manchurian Gravy of crispy paneer cubes in a sour & umami gravy or sauce. You will find this Paneer Manchurian with sauce in many restaurants serving Chinese food.",
            price: 120
        },
        {
            id: 8,
            type: "Indian Main Course Veg",
            name: "Baby Corn Manchurian",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/GRTPkCy/Babycorn.png",
            recipes: "The recipe of Baby corn manchurian gravy has spicy, sweet, umami and sour tastes that taste great with veg fried rice or veg noodles or hakka noodles.",
            price: 180
        },
        {
            id: 9,
            type: "Indian Main Course Veg",
            name: "Kadai Mushroom",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/QkTv6k3/Mushroom.png",
            recipes: "Kadai Mushroom is such a super easy and delicious dish of sautéed button mushrooms, onions, bell peppers (capsicum) in a spiced, tangy tomato sauce. The recipe comes together in 30 minutes and so delish with naan, roti and even bread rolls.",
            price: 150
        },
        {
            id: 10,
            type: "Indian Main Course Veg",
            name: "Mushroom manchurian",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/CP7pkzP/Mushroom1.png",
            recipes: "For all mushroom lovers, this is another fantastic spicy Indo Chinese recipe of mushroom manchurian dry. A vegan dish",
            price: 180
        },
        {
            id: 11,
            type: "Rice and Biryani",
            name: "Veg Pulao",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/25wsRg4/Pulao.png",
            recipes: "Pulao or pilaf, is comfort food at its best. This one-pot dish made with rice and vegetables has added spices and herbs, giving it a mild aromatic flavor. The dish is also vegetarian and is great on its own or paired with raita (an Indian yogurt dish), pickle and roasted papad (a crisp thin Indian snack).",
            price: 180
        },
        {
            id: 12,
            type: "Rice and Biryani",
            name: "Kashmiri Pulao",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/zb8zGPg/pulao1.png",
            recipes: "My recipe for Kashmiri Pulao is packed with toasted nuts and warming spices for an aromatic rice dish that is mild and faintly sweet in taste. Whether you serve this gluten-free and vegetarian dish as a side or light lunch, you’re sure to love it.",
            price: 220
        },
        {
            id: 13,
            type: "Rice and Biryani",
            name: "Fried Rice",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/nsQsVsF/Fried-Rice.png",
            recipes: "This classic fried rice recipe is loaded with fresh mixed veggies and aromatic spices for an incredibly hearty, flavorful vegan dish. Hands-down this is one of our favorite Chinese-inspired recipes. Not only is vegetable fried rice amazingly easy to make from scratch, a naturally vegan dish that's as good for you as it is delicious to eat. You can even tweak veg fried rice to be gluten-free simply by using GF-friendly soy sauce or tamari.",
            price: 200
        },
        {
            id: 14,
            type: "Rice and Biryani",
            name: "Chicken Biryani ",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/jwZ4RQj/Biryani.png",
            recipes: "Chicken Biryani is a savory chicken and rice dish that includes layers of chicken, rice, and aromatics that are steamed together. The bottom layer of rice absorbs all the chicken juices as it cooks, giving it a tender texture and rich flavor, while the top layer of rice turns out white and fluffy. Buried in the Biryani, you’ll find whole cuts of succulent chicken bursting with flavor from the potent array of spices, herbs, and aromatics it’s marinated in.",
            price: 200
        },
        {
            id: 15,
            type: "Rice and Biryani",
            name: "Mutton Biryani",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/VgmDn7Q/Biryani2.png",
            recipes: "This mutton biryani recipe has layers of mutton and saffron-milk infused rice cooked 'dum' style. It has a host of aromatic spices and herbs such as star anise, bay leaves, cardamom, cinnamon, cloves, jaiphal, and javitri along with chillies, rose water, kewda and saffron cooked with succulent mutton pieces.",
            price: 250
        },
        {
            id: 16,
            type: "Pizza",
            name: "Margherita pizza",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/zHkj4Qv/pizza.png",
            recipes: "Everyone loves pizza, and we’re starting off this awesome list with a margherita pizza that you can make in a skillet. It’s filled with fresh mozzarella, ripe tomatoes, and basil leaves. It’s also got a perfect crispy golden crust!",
            price: 180
        },
        {
            id: 17,
            type: "Pizza",
            name: "Chicken pizza",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/P9TZdzj/pizza1.png",
            recipes: "This Italian favorite pizza is a delicious mix of flat bread or base topped with cheese, chillies, onion, garlic sauce and chunks of chicken. Explore the juiciness of meaty chicken chunks embedded in gooey cheesiness. It can't get better than this.",
            price: 220
        },
        {
            id: 18,
            type: "Pizza",
            name: " Kebab and Paneer Pizza",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/M2bVHCG/pizza2.png",
            recipes: "Think out-of-the-box-cooking, think fusion food. This is what you get when Italian cooking marries Indian flavours. A mouth watering pizza recipe that is sure to tantalize your taste buds. This fusion of Mughlai seekh kebab and Italian pizza recipe is easy and quick.",
            price: 250
        },
        {
            id: 19,
            type: "Pizza",
            name: "bacon breakfast pizza",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/yRSRxbx/pizza3.png",
            recipes: "Sometimes, you just want pizza for breakfast. Why not make this bacon breakfast pizza, so you can enjoy the tasty pizza, while still using traditional breakfast ingredients like crispy bacon and eggs that are perfectly cooked.",
            price: 200
        },
        {
            id: 20,
            type: "Pizza",
            name: "Vegetarian Pizza",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/C7yqH3S/pizza4.png",
            recipes: "Garden fresh veggies come together to create a delicious symphony for your taste-buds. Lots of variety and a harmony of flavours teamed with unmatchable cheesiness, heavenly indeed! This special vegetarian pizza recipe will be loved by kids and adults alike.",
            price: 220
        },
        {
            id: 21,
            type: "Burgers",
            name: "Chilli burger ",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/bgG0013/burger.png",
            recipes: "This scrumptious burger sits under a chilli lamb pattie, roasted bell pepper dip, onions, tomatoes and lettuce.",
            price: 100
        },
        {
            id: 22,
            type: "Burgers",
            name: "Crunchy Chicken and Fish Burger",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/Pc1sGhB/burger1.png",
            recipes: "If a burger for you is all about the meat and protein then you're at the right place. Experience the goodness of chicken, fish and a tangy hot and sour sauce.",
            price: 150
        },
        {
            id: 23,
            type: "Burgers",
            name: "Chicken Feta Cheese Burger",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/0VqGdZX/burger2.png",
            recipes: "Chicken mince marinated with salt, pepper and feta cheese is only the beginning of this ultimate wonder. To accompany this we've got a guilt free potato salad with a yogurt dressing.",
            price: 150
        },
        {
            id: 24,
            type: "Burgers",
            name: "Lentil and Mushroom Burger",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/L1yQLYq/burger3.png",
            recipes: "For the healthy and calorie conscious folks we've got this tasty burger. A lentil, mushroom and sun dried tomato pattie packed between a whole wheat bun.",
            price: 120
        },
        {
            id: 25,
            type: "Burgers",
            name: "Butter Chicken Twin Burgers",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/ctKTdV7/burger4.png",
            recipes: "Made with chicken tikka coated in spicy, delicious makhani gravy filled inside a burger bun. Butter chicken twin burgers are a tasty snack or appetizer for kids and adults alike!.",
            price: 130
        },
        {
            id: 26,
            type: "Sandwich",
            name: "Dahi Sandwich",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/9yq3vTh/sandwich.png",
            recipes: "This Indian version is made using yogurt, and it looks like thick cream cheese. It works as a lovely, creamy base into which you’ll add crunchy diced veggies and a few spices. Fill the bread and cook on medium heat until the outside is golden and the middle is warmed through.",
            price: 80
        },
        {
            id: 27,
            type: "Sandwich",
            name: "Aloo Toast Sandwich",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/0FvkBZZ/sandwich1.png",
            recipes: "Aloo is the Hindi word for potato, and it’s a popular ingredient in Indian cooking. I knew I’d love this recipe once I saw the combination of warm spices and luscious chutney. And it all starts with simple, boiled potatoes. ",
            price: 60
        },
        {
            id: 28,
            type: "Sandwich",
            name: "Indian Bread Omelette",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/JymLshB/sandwich2.png",
            recipes: "Although this sandwich isn’t loaded with spice, it’s actually a super traditional street food in India.You’ll find it at vendors all over the place, and I love that the recipe has gone viral.After all, what could be better than egg-dipped bread wrapped in cheese, served crispy with bacon and scallions.It takes minutes to throw together, and it will fill you up all day long.",
            price: 40
        },
        {
            id: 29,
            type: "Sandwich",
            name: "Paneer Sandwich Recipe",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/7YDqsML/sandwich3.png",
            recipes: "Paneer is a milky type of soft cheese that looks just like cheese curds, though the texture is more like feta (crumbly).It’s sliceable and super mild, and since it doesn’t melt like regular cheese, it holds its shape in everything from toasted sandwiches to curries. Mix it with veggies, spices, and a little tomato paste for something pretty unique and hard to resist.",
            price: 80
        },
        {
            id: 30,
            type: "Sandwich",
            name: "Avocado Tandoori Chicken Sandwich",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/ryk2SmB/sandwich4.png",
            recipes: "First of all, how amazing does this Indian sandwich look? That bright green against the vibrant tandoori chicken has me drooling. And it tastes even better than it looks. Keep it simple with smashed avocado and chicken, or ramp it up with some crunchy red onions and green chilies.",
            price: 100
        },]
    },
    {
        id: 5,
        image: "https://i.ibb.co/jkmFz2J/res8.jpg",
        name: "Arsalan Restaurant & Caterer",
        place: "Ballygunge",
        location: "Kolkata",
        phNo: 8944827504,
        cuisines: "North Indian, Fast Food",
        costForTwo: 600,
        rating: 4.4,
        menu: [{
            id: 1,
            type: "Mocktail",
            name: "Summerberry Cooler",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            // type: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/tsWkNM7/Summerberry.png",
            recipes: "Raspberry, apple juice, strawberry and concentrated lemonade altogether make for a frosty summer treat that everyone will adore.",
            price: 120
        },
        {
            id: 2,
            type: "Mocktail",
            name: "Citrus Strawberry Mocktail",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/87PRNWQ/Strawberry.png",
            recipes: "Refresh and rehydrate with this citrusy drink! Several ingredients combine to create this colorful treat, made with strawberry, orange juice, icing sugar, sparkling powder, and a hint of basil.",
            price: 140
        },
        {
            id: 3,
            type: "Mocktail",
            name: "Sparkling Cherry Limeade",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/jy7zZVL/Cherry.png",
            recipes: "Cherry juice, lemon wedges, lime juice and sugar pair together deliciously with sparkling water. This is just what you need!",
            price: 100
        },
        {
            id: 4,
            type: "Mocktail",
            name: "Mint Zing",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/S6m728W/MintZing.png",
            recipes: "Quench your thirst with this refreshing drink, loaded with fresh fruits and herbs. It's a low calorie sweet fruity drink that will give your digestive system a healthy boost!",
            price: 120
        },
        {
            id: 5,
            type: "Mocktail",
            name: "Beach Tropicana",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/r5Bt5Hs/Tropicana.png",
            recipes: "The flavor combination is so addictive you'll find yourself craving for more.",
            price: 130
        },
        {
            id: 6,
            type: "Indian Main Course Veg",
            name: "Paneer Butter Masala",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/Lt4BcNF/Paneer1.png",
            recipes: "Paneer Butter Masala is one of India’s most popular paneer recipe. This recipe with Indian cottage cheese cubes in a creamy tomato sauce is a best one that I have been making for a long time.",
            price: 150
        },
        {
            id: 7,
            type: "Indian Main Course Veg",
            name: "Paneer Manchurian",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/vPmnZJr/Paneer2.png",
            recipes: "This Paneer Manchurian Gravy of crispy paneer cubes in a sour & umami gravy or sauce. You will find this Paneer Manchurian with sauce in many restaurants serving Chinese food.",
            price: 120
        },
        {
            id: 8,
            type: "Indian Main Course Veg",
            name: "Baby Corn Manchurian",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/GRTPkCy/Babycorn.png",
            recipes: "The recipe of Baby corn manchurian gravy has spicy, sweet, umami and sour tastes that taste great with veg fried rice or veg noodles or hakka noodles.",
            price: 180
        },
        {
            id: 9,
            type: "Indian Main Course Veg",
            name: "Kadai Mushroom",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/QkTv6k3/Mushroom.png",
            recipes: "Kadai Mushroom is such a super easy and delicious dish of sautéed button mushrooms, onions, bell peppers (capsicum) in a spiced, tangy tomato sauce. The recipe comes together in 30 minutes and so delish with naan, roti and even bread rolls.",
            price: 150
        },
        {
            id: 10,
            type: "Indian Main Course Veg",
            name: "Mushroom manchurian",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/CP7pkzP/Mushroom1.png",
            recipes: "For all mushroom lovers, this is another fantastic spicy Indo Chinese recipe of mushroom manchurian dry. A vegan dish",
            price: 180
        },
        {
            id: 11,
            type: "Rice and Biryani",
            name: "Veg Pulao",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/25wsRg4/Pulao.png",
            recipes: "Pulao or pilaf, is comfort food at its best. This one-pot dish made with rice and vegetables has added spices and herbs, giving it a mild aromatic flavor. The dish is also vegetarian and is great on its own or paired with raita (an Indian yogurt dish), pickle and roasted papad (a crisp thin Indian snack).",
            price: 180
        },
        {
            id: 12,
            type: "Rice and Biryani",
            name: "Kashmiri Pulao",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/zb8zGPg/pulao1.png",
            recipes: "My recipe for Kashmiri Pulao is packed with toasted nuts and warming spices for an aromatic rice dish that is mild and faintly sweet in taste. Whether you serve this gluten-free and vegetarian dish as a side or light lunch, you’re sure to love it.",
            price: 220
        },
        {
            id: 13,
            type: "Rice and Biryani",
            name: "Fried Rice",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/nsQsVsF/Fried-Rice.png",
            recipes: "This classic fried rice recipe is loaded with fresh mixed veggies and aromatic spices for an incredibly hearty, flavorful vegan dish. Hands-down this is one of our favorite Chinese-inspired recipes. Not only is vegetable fried rice amazingly easy to make from scratch, a naturally vegan dish that's as good for you as it is delicious to eat. You can even tweak veg fried rice to be gluten-free simply by using GF-friendly soy sauce or tamari.",
            price: 200
        },
        {
            id: 14,
            type: "Rice and Biryani",
            name: "Chicken Biryani ",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/jwZ4RQj/Biryani.png",
            recipes: "Chicken Biryani is a savory chicken and rice dish that includes layers of chicken, rice, and aromatics that are steamed together. The bottom layer of rice absorbs all the chicken juices as it cooks, giving it a tender texture and rich flavor, while the top layer of rice turns out white and fluffy. Buried in the Biryani, you’ll find whole cuts of succulent chicken bursting with flavor from the potent array of spices, herbs, and aromatics it’s marinated in.",
            price: 200
        },
        {
            id: 15,
            type: "Rice and Biryani",
            name: "Mutton Biryani",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/VgmDn7Q/Biryani2.png",
            recipes: "This mutton biryani recipe has layers of mutton and saffron-milk infused rice cooked 'dum' style. It has a host of aromatic spices and herbs such as star anise, bay leaves, cardamom, cinnamon, cloves, jaiphal, and javitri along with chillies, rose water, kewda and saffron cooked with succulent mutton pieces.",
            price: 250
        },
        {
            id: 16,
            type: "Pizza",
            name: "Margherita pizza",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/zHkj4Qv/pizza.png",
            recipes: "Everyone loves pizza, and we’re starting off this awesome list with a margherita pizza that you can make in a skillet. It’s filled with fresh mozzarella, ripe tomatoes, and basil leaves. It’s also got a perfect crispy golden crust!",
            price: 180
        },
        {
            id: 17,
            type: "Pizza",
            name: "Chicken pizza",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/P9TZdzj/pizza1.png",
            recipes: "This Italian favorite pizza is a delicious mix of flat bread or base topped with cheese, chillies, onion, garlic sauce and chunks of chicken. Explore the juiciness of meaty chicken chunks embedded in gooey cheesiness. It can't get better than this.",
            price: 220
        },
        {
            id: 18,
            type: "Pizza",
            name: " Kebab and Paneer Pizza",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/M2bVHCG/pizza2.png",
            recipes: "Think out-of-the-box-cooking, think fusion food. This is what you get when Italian cooking marries Indian flavours. A mouth watering pizza recipe that is sure to tantalize your taste buds. This fusion of Mughlai seekh kebab and Italian pizza recipe is easy and quick.",
            price: 250
        },
        {
            id: 19,
            type: "Pizza",
            name: "bacon breakfast pizza",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/yRSRxbx/pizza3.png",
            recipes: "Sometimes, you just want pizza for breakfast. Why not make this bacon breakfast pizza, so you can enjoy the tasty pizza, while still using traditional breakfast ingredients like crispy bacon and eggs that are perfectly cooked.",
            price: 200
        },
        {
            id: 20,
            type: "Pizza",
            name: "Vegetarian Pizza",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/C7yqH3S/pizza4.png",
            recipes: "Garden fresh veggies come together to create a delicious symphony for your taste-buds. Lots of variety and a harmony of flavours teamed with unmatchable cheesiness, heavenly indeed! This special vegetarian pizza recipe will be loved by kids and adults alike.",
            price: 220
        },
        {
            id: 21,
            type: "Burgers",
            name: "Chilli burger ",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/bgG0013/burger.png",
            recipes: "This scrumptious burger sits under a chilli lamb pattie, roasted bell pepper dip, onions, tomatoes and lettuce.",
            price: 100
        },
        {
            id: 22,
            type: "Burgers",
            name: "Crunchy Chicken and Fish Burger",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/Pc1sGhB/burger1.png",
            recipes: "If a burger for you is all about the meat and protein then you're at the right place. Experience the goodness of chicken, fish and a tangy hot and sour sauce.",
            price: 150
        },
        {
            id: 23,
            type: "Burgers",
            name: "Chicken Feta Cheese Burger",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/0VqGdZX/burger2.png",
            recipes: "Chicken mince marinated with salt, pepper and feta cheese is only the beginning of this ultimate wonder. To accompany this we've got a guilt free potato salad with a yogurt dressing.",
            price: 150
        },
        {
            id: 24,
            type: "Burgers",
            name: "Lentil and Mushroom Burger",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/L1yQLYq/burger3.png",
            recipes: "For the healthy and calorie conscious folks we've got this tasty burger. A lentil, mushroom and sun dried tomato pattie packed between a whole wheat bun.",
            price: 120
        },
        {
            id: 25,
            type: "Burgers",
            name: "Butter Chicken Twin Burgers",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/ctKTdV7/burger4.png",
            recipes: "Made with chicken tikka coated in spicy, delicious makhani gravy filled inside a burger bun. Butter chicken twin burgers are a tasty snack or appetizer for kids and adults alike!.",
            price: 130
        },
        {
            id: 26,
            type: "Sandwich",
            name: "Dahi Sandwich",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/9yq3vTh/sandwich.png",
            recipes: "This Indian version is made using yogurt, and it looks like thick cream cheese. It works as a lovely, creamy base into which you’ll add crunchy diced veggies and a few spices. Fill the bread and cook on medium heat until the outside is golden and the middle is warmed through.",
            price: 80
        },
        {
            id: 27,
            type: "Sandwich",
            name: "Aloo Toast Sandwich",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/0FvkBZZ/sandwich1.png",
            recipes: "Aloo is the Hindi word for potato, and it’s a popular ingredient in Indian cooking. I knew I’d love this recipe once I saw the combination of warm spices and luscious chutney. And it all starts with simple, boiled potatoes. ",
            price: 60
        },
        {
            id: 28,
            type: "Sandwich",
            name: "Indian Bread Omelette",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/JymLshB/sandwich2.png",
            recipes: "Although this sandwich isn’t loaded with spice, it’s actually a super traditional street food in India.You’ll find it at vendors all over the place, and I love that the recipe has gone viral.After all, what could be better than egg-dipped bread wrapped in cheese, served crispy with bacon and scallions.It takes minutes to throw together, and it will fill you up all day long.",
            price: 40
        },
        {
            id: 29,
            type: "Sandwich",
            name: "Paneer Sandwich Recipe",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/7YDqsML/sandwich3.png",
            recipes: "Paneer is a milky type of soft cheese that looks just like cheese curds, though the texture is more like feta (crumbly).It’s sliceable and super mild, and since it doesn’t melt like regular cheese, it holds its shape in everything from toasted sandwiches to curries. Mix it with veggies, spices, and a little tomato paste for something pretty unique and hard to resist.",
            price: 80
        },
        {
            id: 30,
            type: "Sandwich",
            name: "Avocado Tandoori Chicken Sandwich",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/ryk2SmB/sandwich4.png",
            recipes: "First of all, how amazing does this Indian sandwich look? That bright green against the vibrant tandoori chicken has me drooling. And it tastes even better than it looks. Keep it simple with smashed avocado and chicken, or ramp it up with some crunchy red onions and green chilies.",
            price: 100
        },]
    },
    {
        id: 6,
        image: "https://i.ibb.co/890R5Sc/res9.jpg",
        name: "Barbeque Nation",
        place: "Park street",
        location: "Kolkata",
        phNo: 8944827505,
        cuisines: "South Indian, Fast Food",
        costForTwo: 600,
        rating: 4.4,
        menu: [{
            id: 1,
            type: "Mocktail",
            name: "Summerberry Cooler",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            // type: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/tsWkNM7/Summerberry.png",
            recipes: "Raspberry, apple juice, strawberry and concentrated lemonade altogether make for a frosty summer treat that everyone will adore.",
            price: 120
        },
        {
            id: 2,
            type: "Mocktail",
            name: "Citrus Strawberry Mocktail",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/87PRNWQ/Strawberry.png",
            recipes: "Refresh and rehydrate with this citrusy drink! Several ingredients combine to create this colorful treat, made with strawberry, orange juice, icing sugar, sparkling powder, and a hint of basil.",
            price: 140
        },
        {
            id: 3,
            type: "Mocktail",
            name: "Sparkling Cherry Limeade",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/jy7zZVL/Cherry.png",
            recipes: "Cherry juice, lemon wedges, lime juice and sugar pair together deliciously with sparkling water. This is just what you need!",
            price: 100
        },
        {
            id: 4,
            type: "Mocktail",
            name: "Mint Zing",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/S6m728W/MintZing.png",
            recipes: "Quench your thirst with this refreshing drink, loaded with fresh fruits and herbs. It's a low calorie sweet fruity drink that will give your digestive system a healthy boost!",
            price: 120
        },
        {
            id: 5,
            type: "Mocktail",
            name: "Beach Tropicana",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/r5Bt5Hs/Tropicana.png",
            recipes: "The flavor combination is so addictive you'll find yourself craving for more.",
            price: 130
        },
        {
            id: 6,
            type: "Indian Main Course Veg",
            name: "Paneer Butter Masala",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/Lt4BcNF/Paneer1.png",
            recipes: "Paneer Butter Masala is one of India’s most popular paneer recipe. This recipe with Indian cottage cheese cubes in a creamy tomato sauce is a best one that I have been making for a long time.",
            price: 150
        },
        {
            id: 7,
            type: "Indian Main Course Veg",
            name: "Paneer Manchurian",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/vPmnZJr/Paneer2.png",
            recipes: "This Paneer Manchurian Gravy of crispy paneer cubes in a sour & umami gravy or sauce. You will find this Paneer Manchurian with sauce in many restaurants serving Chinese food.",
            price: 120
        },
        {
            id: 8,
            type: "Indian Main Course Veg",
            name: "Baby Corn Manchurian",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/GRTPkCy/Babycorn.png",
            recipes: "The recipe of Baby corn manchurian gravy has spicy, sweet, umami and sour tastes that taste great with veg fried rice or veg noodles or hakka noodles.",
            price: 180
        },
        {
            id: 9,
            type: "Indian Main Course Veg",
            name: "Kadai Mushroom",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/QkTv6k3/Mushroom.png",
            recipes: "Kadai Mushroom is such a super easy and delicious dish of sautéed button mushrooms, onions, bell peppers (capsicum) in a spiced, tangy tomato sauce. The recipe comes together in 30 minutes and so delish with naan, roti and even bread rolls.",
            price: 150
        },
        {
            id: 10,
            type: "Indian Main Course Veg",
            name: "Mushroom manchurian",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/CP7pkzP/Mushroom1.png",
            recipes: "For all mushroom lovers, this is another fantastic spicy Indo Chinese recipe of mushroom manchurian dry. A vegan dish",
            price: 180
        },
        {
            id: 11,
            type: "Rice and Biryani",
            name: "Veg Pulao",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/25wsRg4/Pulao.png",
            recipes: "Pulao or pilaf, is comfort food at its best. This one-pot dish made with rice and vegetables has added spices and herbs, giving it a mild aromatic flavor. The dish is also vegetarian and is great on its own or paired with raita (an Indian yogurt dish), pickle and roasted papad (a crisp thin Indian snack).",
            price: 180
        },
        {
            id: 12,
            type: "Rice and Biryani",
            name: "Kashmiri Pulao",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/zb8zGPg/pulao1.png",
            recipes: "My recipe for Kashmiri Pulao is packed with toasted nuts and warming spices for an aromatic rice dish that is mild and faintly sweet in taste. Whether you serve this gluten-free and vegetarian dish as a side or light lunch, you’re sure to love it.",
            price: 220
        },
        {
            id: 13,
            type: "Rice and Biryani",
            name: "Fried Rice",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/nsQsVsF/Fried-Rice.png",
            recipes: "This classic fried rice recipe is loaded with fresh mixed veggies and aromatic spices for an incredibly hearty, flavorful vegan dish. Hands-down this is one of our favorite Chinese-inspired recipes. Not only is vegetable fried rice amazingly easy to make from scratch, a naturally vegan dish that's as good for you as it is delicious to eat. You can even tweak veg fried rice to be gluten-free simply by using GF-friendly soy sauce or tamari.",
            price: 200
        },
        {
            id: 14,
            type: "Rice and Biryani",
            name: "Chicken Biryani ",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/jwZ4RQj/Biryani.png",
            recipes: "Chicken Biryani is a savory chicken and rice dish that includes layers of chicken, rice, and aromatics that are steamed together. The bottom layer of rice absorbs all the chicken juices as it cooks, giving it a tender texture and rich flavor, while the top layer of rice turns out white and fluffy. Buried in the Biryani, you’ll find whole cuts of succulent chicken bursting with flavor from the potent array of spices, herbs, and aromatics it’s marinated in.",
            price: 200
        },
        {
            id: 15,
            type: "Rice and Biryani",
            name: "Mutton Biryani",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/VgmDn7Q/Biryani2.png",
            recipes: "This mutton biryani recipe has layers of mutton and saffron-milk infused rice cooked 'dum' style. It has a host of aromatic spices and herbs such as star anise, bay leaves, cardamom, cinnamon, cloves, jaiphal, and javitri along with chillies, rose water, kewda and saffron cooked with succulent mutton pieces.",
            price: 250
        },
        {
            id: 16,
            type: "Pizza",
            name: "Margherita pizza",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/zHkj4Qv/pizza.png",
            recipes: "Everyone loves pizza, and we’re starting off this awesome list with a margherita pizza that you can make in a skillet. It’s filled with fresh mozzarella, ripe tomatoes, and basil leaves. It’s also got a perfect crispy golden crust!",
            price: 180
        },
        {
            id: 17,
            type: "Pizza",
            name: "Chicken pizza",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/P9TZdzj/pizza1.png",
            recipes: "This Italian favorite pizza is a delicious mix of flat bread or base topped with cheese, chillies, onion, garlic sauce and chunks of chicken. Explore the juiciness of meaty chicken chunks embedded in gooey cheesiness. It can't get better than this.",
            price: 220
        },
        {
            id: 18,
            type: "Pizza",
            name: " Kebab and Paneer Pizza",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/M2bVHCG/pizza2.png",
            recipes: "Think out-of-the-box-cooking, think fusion food. This is what you get when Italian cooking marries Indian flavours. A mouth watering pizza recipe that is sure to tantalize your taste buds. This fusion of Mughlai seekh kebab and Italian pizza recipe is easy and quick.",
            price: 250
        },
        {
            id: 19,
            type: "Pizza",
            name: "bacon breakfast pizza",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/yRSRxbx/pizza3.png",
            recipes: "Sometimes, you just want pizza for breakfast. Why not make this bacon breakfast pizza, so you can enjoy the tasty pizza, while still using traditional breakfast ingredients like crispy bacon and eggs that are perfectly cooked.",
            price: 200
        },
        {
            id: 20,
            type: "Pizza",
            name: "Vegetarian Pizza",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/C7yqH3S/pizza4.png",
            recipes: "Garden fresh veggies come together to create a delicious symphony for your taste-buds. Lots of variety and a harmony of flavours teamed with unmatchable cheesiness, heavenly indeed! This special vegetarian pizza recipe will be loved by kids and adults alike.",
            price: 220
        },
        {
            id: 21,
            type: "Burgers",
            name: "Chilli burger ",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/bgG0013/burger.png",
            recipes: "This scrumptious burger sits under a chilli lamb pattie, roasted bell pepper dip, onions, tomatoes and lettuce.",
            price: 100
        },
        {
            id: 22,
            type: "Burgers",
            name: "Crunchy Chicken and Fish Burger",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/Pc1sGhB/burger1.png",
            recipes: "If a burger for you is all about the meat and protein then you're at the right place. Experience the goodness of chicken, fish and a tangy hot and sour sauce.",
            price: 150
        },
        {
            id: 23,
            type: "Burgers",
            name: "Chicken Feta Cheese Burger",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/0VqGdZX/burger2.png",
            recipes: "Chicken mince marinated with salt, pepper and feta cheese is only the beginning of this ultimate wonder. To accompany this we've got a guilt free potato salad with a yogurt dressing.",
            price: 150
        },
        {
            id: 24,
            type: "Burgers",
            name: "Lentil and Mushroom Burger",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/L1yQLYq/burger3.png",
            recipes: "For the healthy and calorie conscious folks we've got this tasty burger. A lentil, mushroom and sun dried tomato pattie packed between a whole wheat bun.",
            price: 120
        },
        {
            id: 25,
            type: "Burgers",
            name: "Butter Chicken Twin Burgers",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/ctKTdV7/burger4.png",
            recipes: "Made with chicken tikka coated in spicy, delicious makhani gravy filled inside a burger bun. Butter chicken twin burgers are a tasty snack or appetizer for kids and adults alike!.",
            price: 130
        },
        {
            id: 26,
            type: "Sandwich",
            name: "Dahi Sandwich",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/9yq3vTh/sandwich.png",
            recipes: "This Indian version is made using yogurt, and it looks like thick cream cheese. It works as a lovely, creamy base into which you’ll add crunchy diced veggies and a few spices. Fill the bread and cook on medium heat until the outside is golden and the middle is warmed through.",
            price: 80
        },
        {
            id: 27,
            type: "Sandwich",
            name: "Aloo Toast Sandwich",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/0FvkBZZ/sandwich1.png",
            recipes: "Aloo is the Hindi word for potato, and it’s a popular ingredient in Indian cooking. I knew I’d love this recipe once I saw the combination of warm spices and luscious chutney. And it all starts with simple, boiled potatoes. ",
            price: 60
        },
        {
            id: 28,
            type: "Sandwich",
            name: "Indian Bread Omelette",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/JymLshB/sandwich2.png",
            recipes: "Although this sandwich isn’t loaded with spice, it’s actually a super traditional street food in India.You’ll find it at vendors all over the place, and I love that the recipe has gone viral.After all, what could be better than egg-dipped bread wrapped in cheese, served crispy with bacon and scallions.It takes minutes to throw together, and it will fill you up all day long.",
            price: 40
        },
        {
            id: 29,
            type: "Sandwich",
            name: "Paneer Sandwich Recipe",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/7YDqsML/sandwich3.png",
            recipes: "Paneer is a milky type of soft cheese that looks just like cheese curds, though the texture is more like feta (crumbly).It’s sliceable and super mild, and since it doesn’t melt like regular cheese, it holds its shape in everything from toasted sandwiches to curries. Mix it with veggies, spices, and a little tomato paste for something pretty unique and hard to resist.",
            price: 80
        },
        {
            id: 30,
            type: "Sandwich",
            name: "Avocado Tandoori Chicken Sandwich",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/ryk2SmB/sandwich4.png",
            recipes: "First of all, how amazing does this Indian sandwich look? That bright green against the vibrant tandoori chicken has me drooling. And it tastes even better than it looks. Keep it simple with smashed avocado and chicken, or ramp it up with some crunchy red onions and green chilies.",
            price: 100
        },]
    },
    {
        id: 7,
        image: "https://i.ibb.co/r3JjXmV/res10.jpg",
        name: "Dada Boudi Restaurant",
        place: " Barrackpore",
        location: "Kolkata",
        phNo: 8944827506,
        cuisines: "North Indian, Chinese",
        costForTwo: 600,
        rating: 4.4,
        menu: [{
            id: 1,
            type: "Mocktail",
            name: "Summerberry Cooler",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            // type: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/tsWkNM7/Summerberry.png",
            recipes: "Raspberry, apple juice, strawberry and concentrated lemonade altogether make for a frosty summer treat that everyone will adore.",
            price: 120
        },
        {
            id: 2,
            type: "Mocktail",
            name: "Citrus Strawberry Mocktail",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/87PRNWQ/Strawberry.png",
            recipes: "Refresh and rehydrate with this citrusy drink! Several ingredients combine to create this colorful treat, made with strawberry, orange juice, icing sugar, sparkling powder, and a hint of basil.",
            price: 140
        },
        {
            id: 3,
            type: "Mocktail",
            name: "Sparkling Cherry Limeade",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/jy7zZVL/Cherry.png",
            recipes: "Cherry juice, lemon wedges, lime juice and sugar pair together deliciously with sparkling water. This is just what you need!",
            price: 100
        },
        {
            id: 4,
            type: "Mocktail",
            name: "Mint Zing",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/S6m728W/MintZing.png",
            recipes: "Quench your thirst with this refreshing drink, loaded with fresh fruits and herbs. It's a low calorie sweet fruity drink that will give your digestive system a healthy boost!",
            price: 120
        },
        {
            id: 5,
            type: "Mocktail",
            name: "Beach Tropicana",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/r5Bt5Hs/Tropicana.png",
            recipes: "The flavor combination is so addictive you'll find yourself craving for more.",
            price: 130
        },
        {
            id: 6,
            type: "Indian Main Course Veg",
            name: "Paneer Butter Masala",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/Lt4BcNF/Paneer1.png",
            recipes: "Paneer Butter Masala is one of India’s most popular paneer recipe. This recipe with Indian cottage cheese cubes in a creamy tomato sauce is a best one that I have been making for a long time.",
            price: 150
        },
        {
            id: 7,
            type: "Indian Main Course Veg",
            name: "Paneer Manchurian",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/vPmnZJr/Paneer2.png",
            recipes: "This Paneer Manchurian Gravy of crispy paneer cubes in a sour & umami gravy or sauce. You will find this Paneer Manchurian with sauce in many restaurants serving Chinese food.",
            price: 120
        },
        {
            id: 8,
            type: "Indian Main Course Veg",
            name: "Baby Corn Manchurian",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/GRTPkCy/Babycorn.png",
            recipes: "The recipe of Baby corn manchurian gravy has spicy, sweet, umami and sour tastes that taste great with veg fried rice or veg noodles or hakka noodles.",
            price: 180
        },
        {
            id: 9,
            type: "Indian Main Course Veg",
            name: "Kadai Mushroom",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/QkTv6k3/Mushroom.png",
            recipes: "Kadai Mushroom is such a super easy and delicious dish of sautéed button mushrooms, onions, bell peppers (capsicum) in a spiced, tangy tomato sauce. The recipe comes together in 30 minutes and so delish with naan, roti and even bread rolls.",
            price: 150
        },
        {
            id: 10,
            type: "Indian Main Course Veg",
            name: "Mushroom manchurian",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/CP7pkzP/Mushroom1.png",
            recipes: "For all mushroom lovers, this is another fantastic spicy Indo Chinese recipe of mushroom manchurian dry. A vegan dish",
            price: 180
        },
        {
            id: 11,
            type: "Rice and Biryani",
            name: "Veg Pulao",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/25wsRg4/Pulao.png",
            recipes: "Pulao or pilaf, is comfort food at its best. This one-pot dish made with rice and vegetables has added spices and herbs, giving it a mild aromatic flavor. The dish is also vegetarian and is great on its own or paired with raita (an Indian yogurt dish), pickle and roasted papad (a crisp thin Indian snack).",
            price: 180
        },
        {
            id: 12,
            type: "Rice and Biryani",
            name: "Kashmiri Pulao",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/zb8zGPg/pulao1.png",
            recipes: "My recipe for Kashmiri Pulao is packed with toasted nuts and warming spices for an aromatic rice dish that is mild and faintly sweet in taste. Whether you serve this gluten-free and vegetarian dish as a side or light lunch, you’re sure to love it.",
            price: 220
        },
        {
            id: 13,
            type: "Rice and Biryani",
            name: "Fried Rice",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/nsQsVsF/Fried-Rice.png",
            recipes: "This classic fried rice recipe is loaded with fresh mixed veggies and aromatic spices for an incredibly hearty, flavorful vegan dish. Hands-down this is one of our favorite Chinese-inspired recipes. Not only is vegetable fried rice amazingly easy to make from scratch, a naturally vegan dish that's as good for you as it is delicious to eat. You can even tweak veg fried rice to be gluten-free simply by using GF-friendly soy sauce or tamari.",
            price: 200
        },
        {
            id: 14,
            type: "Rice and Biryani",
            name: "Chicken Biryani ",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/jwZ4RQj/Biryani.png",
            recipes: "Chicken Biryani is a savory chicken and rice dish that includes layers of chicken, rice, and aromatics that are steamed together. The bottom layer of rice absorbs all the chicken juices as it cooks, giving it a tender texture and rich flavor, while the top layer of rice turns out white and fluffy. Buried in the Biryani, you’ll find whole cuts of succulent chicken bursting with flavor from the potent array of spices, herbs, and aromatics it’s marinated in.",
            price: 200
        },
        {
            id: 15,
            type: "Rice and Biryani",
            name: "Mutton Biryani",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/VgmDn7Q/Biryani2.png",
            recipes: "This mutton biryani recipe has layers of mutton and saffron-milk infused rice cooked 'dum' style. It has a host of aromatic spices and herbs such as star anise, bay leaves, cardamom, cinnamon, cloves, jaiphal, and javitri along with chillies, rose water, kewda and saffron cooked with succulent mutton pieces.",
            price: 250
        },
        {
            id: 16,
            type: "Pizza",
            name: "Margherita pizza",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/zHkj4Qv/pizza.png",
            recipes: "Everyone loves pizza, and we’re starting off this awesome list with a margherita pizza that you can make in a skillet. It’s filled with fresh mozzarella, ripe tomatoes, and basil leaves. It’s also got a perfect crispy golden crust!",
            price: 180
        },
        {
            id: 17,
            type: "Pizza",
            name: "Chicken pizza",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/P9TZdzj/pizza1.png",
            recipes: "This Italian favorite pizza is a delicious mix of flat bread or base topped with cheese, chillies, onion, garlic sauce and chunks of chicken. Explore the juiciness of meaty chicken chunks embedded in gooey cheesiness. It can't get better than this.",
            price: 220
        },
        {
            id: 18,
            type: "Pizza",
            name: " Kebab and Paneer Pizza",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/M2bVHCG/pizza2.png",
            recipes: "Think out-of-the-box-cooking, think fusion food. This is what you get when Italian cooking marries Indian flavours. A mouth watering pizza recipe that is sure to tantalize your taste buds. This fusion of Mughlai seekh kebab and Italian pizza recipe is easy and quick.",
            price: 250
        },
        {
            id: 19,
            type: "Pizza",
            name: "bacon breakfast pizza",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/yRSRxbx/pizza3.png",
            recipes: "Sometimes, you just want pizza for breakfast. Why not make this bacon breakfast pizza, so you can enjoy the tasty pizza, while still using traditional breakfast ingredients like crispy bacon and eggs that are perfectly cooked.",
            price: 200
        },
        {
            id: 20,
            type: "Pizza",
            name: "Vegetarian Pizza",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/C7yqH3S/pizza4.png",
            recipes: "Garden fresh veggies come together to create a delicious symphony for your taste-buds. Lots of variety and a harmony of flavours teamed with unmatchable cheesiness, heavenly indeed! This special vegetarian pizza recipe will be loved by kids and adults alike.",
            price: 220
        },
        {
            id: 21,
            type: "Burgers",
            name: "Chilli burger ",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/bgG0013/burger.png",
            recipes: "This scrumptious burger sits under a chilli lamb pattie, roasted bell pepper dip, onions, tomatoes and lettuce.",
            price: 100
        },
        {
            id: 22,
            type: "Burgers",
            name: "Crunchy Chicken and Fish Burger",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/Pc1sGhB/burger1.png",
            recipes: "If a burger for you is all about the meat and protein then you're at the right place. Experience the goodness of chicken, fish and a tangy hot and sour sauce.",
            price: 150
        },
        {
            id: 23,
            type: "Burgers",
            name: "Chicken Feta Cheese Burger",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/0VqGdZX/burger2.png",
            recipes: "Chicken mince marinated with salt, pepper and feta cheese is only the beginning of this ultimate wonder. To accompany this we've got a guilt free potato salad with a yogurt dressing.",
            price: 150
        },
        {
            id: 24,
            type: "Burgers",
            name: "Lentil and Mushroom Burger",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/L1yQLYq/burger3.png",
            recipes: "For the healthy and calorie conscious folks we've got this tasty burger. A lentil, mushroom and sun dried tomato pattie packed between a whole wheat bun.",
            price: 120
        },
        {
            id: 25,
            type: "Burgers",
            name: "Butter Chicken Twin Burgers",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/ctKTdV7/burger4.png",
            recipes: "Made with chicken tikka coated in spicy, delicious makhani gravy filled inside a burger bun. Butter chicken twin burgers are a tasty snack or appetizer for kids and adults alike!.",
            price: 130
        },
        {
            id: 26,
            type: "Sandwich",
            name: "Dahi Sandwich",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/9yq3vTh/sandwich.png",
            recipes: "This Indian version is made using yogurt, and it looks like thick cream cheese. It works as a lovely, creamy base into which you’ll add crunchy diced veggies and a few spices. Fill the bread and cook on medium heat until the outside is golden and the middle is warmed through.",
            price: 80
        },
        {
            id: 27,
            type: "Sandwich",
            name: "Aloo Toast Sandwich",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/0FvkBZZ/sandwich1.png",
            recipes: "Aloo is the Hindi word for potato, and it’s a popular ingredient in Indian cooking. I knew I’d love this recipe once I saw the combination of warm spices and luscious chutney. And it all starts with simple, boiled potatoes. ",
            price: 60
        },
        {
            id: 28,
            type: "Sandwich",
            name: "Indian Bread Omelette",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/JymLshB/sandwich2.png",
            recipes: "Although this sandwich isn’t loaded with spice, it’s actually a super traditional street food in India.You’ll find it at vendors all over the place, and I love that the recipe has gone viral.After all, what could be better than egg-dipped bread wrapped in cheese, served crispy with bacon and scallions.It takes minutes to throw together, and it will fill you up all day long.",
            price: 40
        },
        {
            id: 29,
            type: "Sandwich",
            name: "Paneer Sandwich Recipe",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/7YDqsML/sandwich3.png",
            recipes: "Paneer is a milky type of soft cheese that looks just like cheese curds, though the texture is more like feta (crumbly).It’s sliceable and super mild, and since it doesn’t melt like regular cheese, it holds its shape in everything from toasted sandwiches to curries. Mix it with veggies, spices, and a little tomato paste for something pretty unique and hard to resist.",
            price: 80
        },
        {
            id: 30,
            type: "Sandwich",
            name: "Avocado Tandoori Chicken Sandwich",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/ryk2SmB/sandwich4.png",
            recipes: "First of all, how amazing does this Indian sandwich look? That bright green against the vibrant tandoori chicken has me drooling. And it tastes even better than it looks. Keep it simple with smashed avocado and chicken, or ramp it up with some crunchy red onions and green chilies.",
            price: 100
        },]
    },
    {
        id: 8,
        image: "https://i.ibb.co/PzxQJ6m/res1.jpg",
        name: "Tamra Restaurant",
        place: "Connaught Place",
        location: "New Delhi",
        phNo: 8944827507,
        cuisines: "North Indian, Chinese",
        costForTwo: 600,
        rating: 4.4,
        menu: [{
            id: 1,
            type: "Mocktail",
            name: "Summerberry Cooler",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            // type: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/tsWkNM7/Summerberry.png",
            recipes: "Raspberry, apple juice, strawberry and concentrated lemonade altogether make for a frosty summer treat that everyone will adore.",
            price: 120
        },
        {
            id: 2,
            type: "Mocktail",
            name: "Citrus Strawberry Mocktail",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/87PRNWQ/Strawberry.png",
            recipes: "Refresh and rehydrate with this citrusy drink! Several ingredients combine to create this colorful treat, made with strawberry, orange juice, icing sugar, sparkling powder, and a hint of basil.",
            price: 140
        },
        {
            id: 3,
            type: "Mocktail",
            name: "Sparkling Cherry Limeade",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/jy7zZVL/Cherry.png",
            recipes: "Cherry juice, lemon wedges, lime juice and sugar pair together deliciously with sparkling water. This is just what you need!",
            price: 100
        },
        {
            id: 4,
            type: "Mocktail",
            name: "Mint Zing",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/S6m728W/MintZing.png",
            recipes: "Quench your thirst with this refreshing drink, loaded with fresh fruits and herbs. It's a low calorie sweet fruity drink that will give your digestive system a healthy boost!",
            price: 120
        },
        {
            id: 5,
            type: "Mocktail",
            name: "Beach Tropicana",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/r5Bt5Hs/Tropicana.png",
            recipes: "The flavor combination is so addictive you'll find yourself craving for more.",
            price: 130
        },
        {
            id: 6,
            type: "Indian Main Course Veg",
            name: "Paneer Butter Masala",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/Lt4BcNF/Paneer1.png",
            recipes: "Paneer Butter Masala is one of India’s most popular paneer recipe. This recipe with Indian cottage cheese cubes in a creamy tomato sauce is a best one that I have been making for a long time.",
            price: 150
        },
        {
            id: 7,
            type: "Indian Main Course Veg",
            name: "Paneer Manchurian",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/vPmnZJr/Paneer2.png",
            recipes: "This Paneer Manchurian Gravy of crispy paneer cubes in a sour & umami gravy or sauce. You will find this Paneer Manchurian with sauce in many restaurants serving Chinese food.",
            price: 120
        },
        {
            id: 8,
            type: "Indian Main Course Veg",
            name: "Baby Corn Manchurian",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/GRTPkCy/Babycorn.png",
            recipes: "The recipe of Baby corn manchurian gravy has spicy, sweet, umami and sour tastes that taste great with veg fried rice or veg noodles or hakka noodles.",
            price: 180
        },
        {
            id: 9,
            type: "Indian Main Course Veg",
            name: "Kadai Mushroom",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/QkTv6k3/Mushroom.png",
            recipes: "Kadai Mushroom is such a super easy and delicious dish of sautéed button mushrooms, onions, bell peppers (capsicum) in a spiced, tangy tomato sauce. The recipe comes together in 30 minutes and so delish with naan, roti and even bread rolls.",
            price: 150
        },
        {
            id: 10,
            type: "Indian Main Course Veg",
            name: "Mushroom manchurian",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/CP7pkzP/Mushroom1.png",
            recipes: "For all mushroom lovers, this is another fantastic spicy Indo Chinese recipe of mushroom manchurian dry. A vegan dish",
            price: 180
        },
        {
            id: 11,
            type: "Rice and Biryani",
            name: "Veg Pulao",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/25wsRg4/Pulao.png",
            recipes: "Pulao or pilaf, is comfort food at its best. This one-pot dish made with rice and vegetables has added spices and herbs, giving it a mild aromatic flavor. The dish is also vegetarian and is great on its own or paired with raita (an Indian yogurt dish), pickle and roasted papad (a crisp thin Indian snack).",
            price: 180
        },
        {
            id: 12,
            type: "Rice and Biryani",
            name: "Kashmiri Pulao",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/zb8zGPg/pulao1.png",
            recipes: "My recipe for Kashmiri Pulao is packed with toasted nuts and warming spices for an aromatic rice dish that is mild and faintly sweet in taste. Whether you serve this gluten-free and vegetarian dish as a side or light lunch, you’re sure to love it.",
            price: 220
        },
        {
            id: 13,
            type: "Rice and Biryani",
            name: "Fried Rice",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/nsQsVsF/Fried-Rice.png",
            recipes: "This classic fried rice recipe is loaded with fresh mixed veggies and aromatic spices for an incredibly hearty, flavorful vegan dish. Hands-down this is one of our favorite Chinese-inspired recipes. Not only is vegetable fried rice amazingly easy to make from scratch, a naturally vegan dish that's as good for you as it is delicious to eat. You can even tweak veg fried rice to be gluten-free simply by using GF-friendly soy sauce or tamari.",
            price: 200
        },
        {
            id: 14,
            type: "Rice and Biryani",
            name: "Chicken Biryani ",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/jwZ4RQj/Biryani.png",
            recipes: "Chicken Biryani is a savory chicken and rice dish that includes layers of chicken, rice, and aromatics that are steamed together. The bottom layer of rice absorbs all the chicken juices as it cooks, giving it a tender texture and rich flavor, while the top layer of rice turns out white and fluffy. Buried in the Biryani, you’ll find whole cuts of succulent chicken bursting with flavor from the potent array of spices, herbs, and aromatics it’s marinated in.",
            price: 200
        },
        {
            id: 15,
            type: "Rice and Biryani",
            name: "Mutton Biryani",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/VgmDn7Q/Biryani2.png",
            recipes: "This mutton biryani recipe has layers of mutton and saffron-milk infused rice cooked 'dum' style. It has a host of aromatic spices and herbs such as star anise, bay leaves, cardamom, cinnamon, cloves, jaiphal, and javitri along with chillies, rose water, kewda and saffron cooked with succulent mutton pieces.",
            price: 250
        },
        {
            id: 16,
            type: "Pizza",
            name: "Margherita pizza",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/zHkj4Qv/pizza.png",
            recipes: "Everyone loves pizza, and we’re starting off this awesome list with a margherita pizza that you can make in a skillet. It’s filled with fresh mozzarella, ripe tomatoes, and basil leaves. It’s also got a perfect crispy golden crust!",
            price: 180
        },
        {
            id: 17,
            type: "Pizza",
            name: "Chicken pizza",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/P9TZdzj/pizza1.png",
            recipes: "This Italian favorite pizza is a delicious mix of flat bread or base topped with cheese, chillies, onion, garlic sauce and chunks of chicken. Explore the juiciness of meaty chicken chunks embedded in gooey cheesiness. It can't get better than this.",
            price: 220
        },
        {
            id: 18,
            type: "Pizza",
            name: " Kebab and Paneer Pizza",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/M2bVHCG/pizza2.png",
            recipes: "Think out-of-the-box-cooking, think fusion food. This is what you get when Italian cooking marries Indian flavours. A mouth watering pizza recipe that is sure to tantalize your taste buds. This fusion of Mughlai seekh kebab and Italian pizza recipe is easy and quick.",
            price: 250
        },
        {
            id: 19,
            type: "Pizza",
            name: "bacon breakfast pizza",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/yRSRxbx/pizza3.png",
            recipes: "Sometimes, you just want pizza for breakfast. Why not make this bacon breakfast pizza, so you can enjoy the tasty pizza, while still using traditional breakfast ingredients like crispy bacon and eggs that are perfectly cooked.",
            price: 200
        },
        {
            id: 20,
            type: "Pizza",
            name: "Vegetarian Pizza",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/C7yqH3S/pizza4.png",
            recipes: "Garden fresh veggies come together to create a delicious symphony for your taste-buds. Lots of variety and a harmony of flavours teamed with unmatchable cheesiness, heavenly indeed! This special vegetarian pizza recipe will be loved by kids and adults alike.",
            price: 220
        },
        {
            id: 21,
            type: "Burgers",
            name: "Chilli burger ",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/bgG0013/burger.png",
            recipes: "This scrumptious burger sits under a chilli lamb pattie, roasted bell pepper dip, onions, tomatoes and lettuce.",
            price: 100
        },
        {
            id: 22,
            type: "Burgers",
            name: "Crunchy Chicken and Fish Burger",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/Pc1sGhB/burger1.png",
            recipes: "If a burger for you is all about the meat and protein then you're at the right place. Experience the goodness of chicken, fish and a tangy hot and sour sauce.",
            price: 150
        },
        {
            id: 23,
            type: "Burgers",
            name: "Chicken Feta Cheese Burger",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/0VqGdZX/burger2.png",
            recipes: "Chicken mince marinated with salt, pepper and feta cheese is only the beginning of this ultimate wonder. To accompany this we've got a guilt free potato salad with a yogurt dressing.",
            price: 150
        },
        {
            id: 24,
            type: "Burgers",
            name: "Lentil and Mushroom Burger",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/L1yQLYq/burger3.png",
            recipes: "For the healthy and calorie conscious folks we've got this tasty burger. A lentil, mushroom and sun dried tomato pattie packed between a whole wheat bun.",
            price: 120
        },
        {
            id: 25,
            type: "Burgers",
            name: "Butter Chicken Twin Burgers",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/ctKTdV7/burger4.png",
            recipes: "Made with chicken tikka coated in spicy, delicious makhani gravy filled inside a burger bun. Butter chicken twin burgers are a tasty snack or appetizer for kids and adults alike!.",
            price: 130
        },
        {
            id: 26,
            type: "Sandwich",
            name: "Dahi Sandwich",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/9yq3vTh/sandwich.png",
            recipes: "This Indian version is made using yogurt, and it looks like thick cream cheese. It works as a lovely, creamy base into which you’ll add crunchy diced veggies and a few spices. Fill the bread and cook on medium heat until the outside is golden and the middle is warmed through.",
            price: 80
        },
        {
            id: 27,
            type: "Sandwich",
            name: "Aloo Toast Sandwich",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/0FvkBZZ/sandwich1.png",
            recipes: "Aloo is the Hindi word for potato, and it’s a popular ingredient in Indian cooking. I knew I’d love this recipe once I saw the combination of warm spices and luscious chutney. And it all starts with simple, boiled potatoes. ",
            price: 60
        },
        {
            id: 28,
            type: "Sandwich",
            name: "Indian Bread Omelette",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/JymLshB/sandwich2.png",
            recipes: "Although this sandwich isn’t loaded with spice, it’s actually a super traditional street food in India.You’ll find it at vendors all over the place, and I love that the recipe has gone viral.After all, what could be better than egg-dipped bread wrapped in cheese, served crispy with bacon and scallions.It takes minutes to throw together, and it will fill you up all day long.",
            price: 40
        },
        {
            id: 29,
            type: "Sandwich",
            name: "Paneer Sandwich Recipe",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/7YDqsML/sandwich3.png",
            recipes: "Paneer is a milky type of soft cheese that looks just like cheese curds, though the texture is more like feta (crumbly).It’s sliceable and super mild, and since it doesn’t melt like regular cheese, it holds its shape in everything from toasted sandwiches to curries. Mix it with veggies, spices, and a little tomato paste for something pretty unique and hard to resist.",
            price: 80
        },
        {
            id: 30,
            type: "Sandwich",
            name: "Avocado Tandoori Chicken Sandwich",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/ryk2SmB/sandwich4.png",
            recipes: "First of all, how amazing does this Indian sandwich look? That bright green against the vibrant tandoori chicken has me drooling. And it tastes even better than it looks. Keep it simple with smashed avocado and chicken, or ramp it up with some crunchy red onions and green chilies.",
            price: 100
        },]
    },
    {
        id: 9,
        image: "https://i.ibb.co/DtcJTsW/res2.jpg",
        name: "The Spice Route",
        place: "The Imperial, New Delhi",
        location: "New Delhi",
        phNo: 8944827512,
        cuisines: "South Indian, Street Food",
        costForTwo: 600,
        rating: 4.4,
        menu: [{
            id: 1,
            type: "Mocktail",
            name: "Summerberry Cooler",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            // type: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/tsWkNM7/Summerberry.png",
            recipes: "Raspberry, apple juice, strawberry and concentrated lemonade altogether make for a frosty summer treat that everyone will adore.",
            price: 120
        },
        {
            id: 2,
            type: "Mocktail",
            name: "Citrus Strawberry Mocktail",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/87PRNWQ/Strawberry.png",
            recipes: "Refresh and rehydrate with this citrusy drink! Several ingredients combine to create this colorful treat, made with strawberry, orange juice, icing sugar, sparkling powder, and a hint of basil.",
            price: 140
        },
        {
            id: 3,
            type: "Mocktail",
            name: "Sparkling Cherry Limeade",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/jy7zZVL/Cherry.png",
            recipes: "Cherry juice, lemon wedges, lime juice and sugar pair together deliciously with sparkling water. This is just what you need!",
            price: 100
        },
        {
            id: 4,
            type: "Mocktail",
            name: "Mint Zing",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/S6m728W/MintZing.png",
            recipes: "Quench your thirst with this refreshing drink, loaded with fresh fruits and herbs. It's a low calorie sweet fruity drink that will give your digestive system a healthy boost!",
            price: 120
        },
        {
            id: 5,
            type: "Mocktail",
            name: "Beach Tropicana",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/r5Bt5Hs/Tropicana.png",
            recipes: "The flavor combination is so addictive you'll find yourself craving for more.",
            price: 130
        },
        {
            id: 6,
            type: "Indian Main Course Veg",
            name: "Paneer Butter Masala",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/Lt4BcNF/Paneer1.png",
            recipes: "Paneer Butter Masala is one of India’s most popular paneer recipe. This recipe with Indian cottage cheese cubes in a creamy tomato sauce is a best one that I have been making for a long time.",
            price: 150
        },
        {
            id: 7,
            type: "Indian Main Course Veg",
            name: "Paneer Manchurian",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/vPmnZJr/Paneer2.png",
            recipes: "This Paneer Manchurian Gravy of crispy paneer cubes in a sour & umami gravy or sauce. You will find this Paneer Manchurian with sauce in many restaurants serving Chinese food.",
            price: 120
        },
        {
            id: 8,
            type: "Indian Main Course Veg",
            name: "Baby Corn Manchurian",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/GRTPkCy/Babycorn.png",
            recipes: "The recipe of Baby corn manchurian gravy has spicy, sweet, umami and sour tastes that taste great with veg fried rice or veg noodles or hakka noodles.",
            price: 180
        },
        {
            id: 9,
            type: "Indian Main Course Veg",
            name: "Kadai Mushroom",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/QkTv6k3/Mushroom.png",
            recipes: "Kadai Mushroom is such a super easy and delicious dish of sautéed button mushrooms, onions, bell peppers (capsicum) in a spiced, tangy tomato sauce. The recipe comes together in 30 minutes and so delish with naan, roti and even bread rolls.",
            price: 150
        },
        {
            id: 10,
            type: "Indian Main Course Veg",
            name: "Mushroom manchurian",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/CP7pkzP/Mushroom1.png",
            recipes: "For all mushroom lovers, this is another fantastic spicy Indo Chinese recipe of mushroom manchurian dry. A vegan dish",
            price: 180
        },
        {
            id: 11,
            type: "Rice and Biryani",
            name: "Veg Pulao",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/25wsRg4/Pulao.png",
            recipes: "Pulao or pilaf, is comfort food at its best. This one-pot dish made with rice and vegetables has added spices and herbs, giving it a mild aromatic flavor. The dish is also vegetarian and is great on its own or paired with raita (an Indian yogurt dish), pickle and roasted papad (a crisp thin Indian snack).",
            price: 180
        },
        {
            id: 12,
            type: "Rice and Biryani",
            name: "Kashmiri Pulao",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/zb8zGPg/pulao1.png",
            recipes: "My recipe for Kashmiri Pulao is packed with toasted nuts and warming spices for an aromatic rice dish that is mild and faintly sweet in taste. Whether you serve this gluten-free and vegetarian dish as a side or light lunch, you’re sure to love it.",
            price: 220
        },
        {
            id: 13,
            type: "Rice and Biryani",
            name: "Fried Rice",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/nsQsVsF/Fried-Rice.png",
            recipes: "This classic fried rice recipe is loaded with fresh mixed veggies and aromatic spices for an incredibly hearty, flavorful vegan dish. Hands-down this is one of our favorite Chinese-inspired recipes. Not only is vegetable fried rice amazingly easy to make from scratch, a naturally vegan dish that's as good for you as it is delicious to eat. You can even tweak veg fried rice to be gluten-free simply by using GF-friendly soy sauce or tamari.",
            price: 200
        },
        {
            id: 14,
            type: "Rice and Biryani",
            name: "Chicken Biryani ",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/jwZ4RQj/Biryani.png",
            recipes: "Chicken Biryani is a savory chicken and rice dish that includes layers of chicken, rice, and aromatics that are steamed together. The bottom layer of rice absorbs all the chicken juices as it cooks, giving it a tender texture and rich flavor, while the top layer of rice turns out white and fluffy. Buried in the Biryani, you’ll find whole cuts of succulent chicken bursting with flavor from the potent array of spices, herbs, and aromatics it’s marinated in.",
            price: 200
        },
        {
            id: 15,
            type: "Rice and Biryani",
            name: "Mutton Biryani",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/VgmDn7Q/Biryani2.png",
            recipes: "This mutton biryani recipe has layers of mutton and saffron-milk infused rice cooked 'dum' style. It has a host of aromatic spices and herbs such as star anise, bay leaves, cardamom, cinnamon, cloves, jaiphal, and javitri along with chillies, rose water, kewda and saffron cooked with succulent mutton pieces.",
            price: 250
        },
        {
            id: 16,
            type: "Pizza",
            name: "Margherita pizza",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/zHkj4Qv/pizza.png",
            recipes: "Everyone loves pizza, and we’re starting off this awesome list with a margherita pizza that you can make in a skillet. It’s filled with fresh mozzarella, ripe tomatoes, and basil leaves. It’s also got a perfect crispy golden crust!",
            price: 180
        },
        {
            id: 17,
            type: "Pizza",
            name: "Chicken pizza",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/P9TZdzj/pizza1.png",
            recipes: "This Italian favorite pizza is a delicious mix of flat bread or base topped with cheese, chillies, onion, garlic sauce and chunks of chicken. Explore the juiciness of meaty chicken chunks embedded in gooey cheesiness. It can't get better than this.",
            price: 220
        },
        {
            id: 18,
            type: "Pizza",
            name: " Kebab and Paneer Pizza",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/M2bVHCG/pizza2.png",
            recipes: "Think out-of-the-box-cooking, think fusion food. This is what you get when Italian cooking marries Indian flavours. A mouth watering pizza recipe that is sure to tantalize your taste buds. This fusion of Mughlai seekh kebab and Italian pizza recipe is easy and quick.",
            price: 250
        },
        {
            id: 19,
            type: "Pizza",
            name: "bacon breakfast pizza",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/yRSRxbx/pizza3.png",
            recipes: "Sometimes, you just want pizza for breakfast. Why not make this bacon breakfast pizza, so you can enjoy the tasty pizza, while still using traditional breakfast ingredients like crispy bacon and eggs that are perfectly cooked.",
            price: 200
        },
        {
            id: 20,
            type: "Pizza",
            name: "Vegetarian Pizza",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/C7yqH3S/pizza4.png",
            recipes: "Garden fresh veggies come together to create a delicious symphony for your taste-buds. Lots of variety and a harmony of flavours teamed with unmatchable cheesiness, heavenly indeed! This special vegetarian pizza recipe will be loved by kids and adults alike.",
            price: 220
        },
        {
            id: 21,
            type: "Burgers",
            name: "Chilli burger ",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/bgG0013/burger.png",
            recipes: "This scrumptious burger sits under a chilli lamb pattie, roasted bell pepper dip, onions, tomatoes and lettuce.",
            price: 100
        },
        {
            id: 22,
            type: "Burgers",
            name: "Crunchy Chicken and Fish Burger",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/Pc1sGhB/burger1.png",
            recipes: "If a burger for you is all about the meat and protein then you're at the right place. Experience the goodness of chicken, fish and a tangy hot and sour sauce.",
            price: 150
        },
        {
            id: 23,
            type: "Burgers",
            name: "Chicken Feta Cheese Burger",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/0VqGdZX/burger2.png",
            recipes: "Chicken mince marinated with salt, pepper and feta cheese is only the beginning of this ultimate wonder. To accompany this we've got a guilt free potato salad with a yogurt dressing.",
            price: 150
        },
        {
            id: 24,
            type: "Burgers",
            name: "Lentil and Mushroom Burger",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/L1yQLYq/burger3.png",
            recipes: "For the healthy and calorie conscious folks we've got this tasty burger. A lentil, mushroom and sun dried tomato pattie packed between a whole wheat bun.",
            price: 120
        },
        {
            id: 25,
            type: "Burgers",
            name: "Butter Chicken Twin Burgers",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/ctKTdV7/burger4.png",
            recipes: "Made with chicken tikka coated in spicy, delicious makhani gravy filled inside a burger bun. Butter chicken twin burgers are a tasty snack or appetizer for kids and adults alike!.",
            price: 130
        },
        {
            id: 26,
            type: "Sandwich",
            name: "Dahi Sandwich",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/9yq3vTh/sandwich.png",
            recipes: "This Indian version is made using yogurt, and it looks like thick cream cheese. It works as a lovely, creamy base into which you’ll add crunchy diced veggies and a few spices. Fill the bread and cook on medium heat until the outside is golden and the middle is warmed through.",
            price: 80
        },
        {
            id: 27,
            type: "Sandwich",
            name: "Aloo Toast Sandwich",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/0FvkBZZ/sandwich1.png",
            recipes: "Aloo is the Hindi word for potato, and it’s a popular ingredient in Indian cooking. I knew I’d love this recipe once I saw the combination of warm spices and luscious chutney. And it all starts with simple, boiled potatoes. ",
            price: 60
        },
        {
            id: 28,
            type: "Sandwich",
            name: "Indian Bread Omelette",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/JymLshB/sandwich2.png",
            recipes: "Although this sandwich isn’t loaded with spice, it’s actually a super traditional street food in India.You’ll find it at vendors all over the place, and I love that the recipe has gone viral.After all, what could be better than egg-dipped bread wrapped in cheese, served crispy with bacon and scallions.It takes minutes to throw together, and it will fill you up all day long.",
            price: 40
        },
        {
            id: 29,
            type: "Sandwich",
            name: "Paneer Sandwich Recipe",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/7YDqsML/sandwich3.png",
            recipes: "Paneer is a milky type of soft cheese that looks just like cheese curds, though the texture is more like feta (crumbly).It’s sliceable and super mild, and since it doesn’t melt like regular cheese, it holds its shape in everything from toasted sandwiches to curries. Mix it with veggies, spices, and a little tomato paste for something pretty unique and hard to resist.",
            price: 80
        },
        {
            id: 30,
            type: "Sandwich",
            name: "Avocado Tandoori Chicken Sandwich",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/ryk2SmB/sandwich4.png",
            recipes: "First of all, how amazing does this Indian sandwich look? That bright green against the vibrant tandoori chicken has me drooling. And it tastes even better than it looks. Keep it simple with smashed avocado and chicken, or ramp it up with some crunchy red onions and green chilies.",
            price: 100
        },]
    },
    {
        id: 10,
        image: "https://i.ibb.co/5rvfRKS/res3.jpg",
        name: "The Qube",
        place: "Chanakyapuri, New Delhi",
        location: "New Delhi",
        phNo: 8944827567,
        cuisines: "Fast Food, Street Food",
        costForTwo: 600,
        rating: 4.4,
        menu: [{
            id: 1,
            type: "Mocktail",
            name: "Summerberry Cooler",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            // type: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/tsWkNM7/Summerberry.png",
            recipes: "Raspberry, apple juice, strawberry and concentrated lemonade altogether make for a frosty summer treat that everyone will adore.",
            price: 120
        },
        {
            id: 2,
            type: "Mocktail",
            name: "Citrus Strawberry Mocktail",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/87PRNWQ/Strawberry.png",
            recipes: "Refresh and rehydrate with this citrusy drink! Several ingredients combine to create this colorful treat, made with strawberry, orange juice, icing sugar, sparkling powder, and a hint of basil.",
            price: 140
        },
        {
            id: 3,
            type: "Mocktail",
            name: "Sparkling Cherry Limeade",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/jy7zZVL/Cherry.png",
            recipes: "Cherry juice, lemon wedges, lime juice and sugar pair together deliciously with sparkling water. This is just what you need!",
            price: 100
        },
        {
            id: 4,
            type: "Mocktail",
            name: "Mint Zing",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/S6m728W/MintZing.png",
            recipes: "Quench your thirst with this refreshing drink, loaded with fresh fruits and herbs. It's a low calorie sweet fruity drink that will give your digestive system a healthy boost!",
            price: 120
        },
        {
            id: 5,
            type: "Mocktail",
            name: "Beach Tropicana",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/r5Bt5Hs/Tropicana.png",
            recipes: "The flavor combination is so addictive you'll find yourself craving for more.",
            price: 130
        },
        {
            id: 6,
            type: "Indian Main Course Veg",
            name: "Paneer Butter Masala",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/Lt4BcNF/Paneer1.png",
            recipes: "Paneer Butter Masala is one of India’s most popular paneer recipe. This recipe with Indian cottage cheese cubes in a creamy tomato sauce is a best one that I have been making for a long time.",
            price: 150
        },
        {
            id: 7,
            type: "Indian Main Course Veg",
            name: "Paneer Manchurian",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/vPmnZJr/Paneer2.png",
            recipes: "This Paneer Manchurian Gravy of crispy paneer cubes in a sour & umami gravy or sauce. You will find this Paneer Manchurian with sauce in many restaurants serving Chinese food.",
            price: 120
        },
        {
            id: 8,
            type: "Indian Main Course Veg",
            name: "Baby Corn Manchurian",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/GRTPkCy/Babycorn.png",
            recipes: "The recipe of Baby corn manchurian gravy has spicy, sweet, umami and sour tastes that taste great with veg fried rice or veg noodles or hakka noodles.",
            price: 180
        },
        {
            id: 9,
            type: "Indian Main Course Veg",
            name: "Kadai Mushroom",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/QkTv6k3/Mushroom.png",
            recipes: "Kadai Mushroom is such a super easy and delicious dish of sautéed button mushrooms, onions, bell peppers (capsicum) in a spiced, tangy tomato sauce. The recipe comes together in 30 minutes and so delish with naan, roti and even bread rolls.",
            price: 150
        },
        {
            id: 10,
            type: "Indian Main Course Veg",
            name: "Mushroom manchurian",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/CP7pkzP/Mushroom1.png",
            recipes: "For all mushroom lovers, this is another fantastic spicy Indo Chinese recipe of mushroom manchurian dry. A vegan dish",
            price: 180
        },
        {
            id: 11,
            type: "Rice and Biryani",
            name: "Veg Pulao",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/25wsRg4/Pulao.png",
            recipes: "Pulao or pilaf, is comfort food at its best. This one-pot dish made with rice and vegetables has added spices and herbs, giving it a mild aromatic flavor. The dish is also vegetarian and is great on its own or paired with raita (an Indian yogurt dish), pickle and roasted papad (a crisp thin Indian snack).",
            price: 180
        },
        {
            id: 12,
            type: "Rice and Biryani",
            name: "Kashmiri Pulao",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/zb8zGPg/pulao1.png",
            recipes: "My recipe for Kashmiri Pulao is packed with toasted nuts and warming spices for an aromatic rice dish that is mild and faintly sweet in taste. Whether you serve this gluten-free and vegetarian dish as a side or light lunch, you’re sure to love it.",
            price: 220
        },
        {
            id: 13,
            type: "Rice and Biryani",
            name: "Fried Rice",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/nsQsVsF/Fried-Rice.png",
            recipes: "This classic fried rice recipe is loaded with fresh mixed veggies and aromatic spices for an incredibly hearty, flavorful vegan dish. Hands-down this is one of our favorite Chinese-inspired recipes. Not only is vegetable fried rice amazingly easy to make from scratch, a naturally vegan dish that's as good for you as it is delicious to eat. You can even tweak veg fried rice to be gluten-free simply by using GF-friendly soy sauce or tamari.",
            price: 200
        },
        {
            id: 14,
            type: "Rice and Biryani",
            name: "Chicken Biryani ",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/jwZ4RQj/Biryani.png",
            recipes: "Chicken Biryani is a savory chicken and rice dish that includes layers of chicken, rice, and aromatics that are steamed together. The bottom layer of rice absorbs all the chicken juices as it cooks, giving it a tender texture and rich flavor, while the top layer of rice turns out white and fluffy. Buried in the Biryani, you’ll find whole cuts of succulent chicken bursting with flavor from the potent array of spices, herbs, and aromatics it’s marinated in.",
            price: 200
        },
        {
            id: 15,
            type: "Rice and Biryani",
            name: "Mutton Biryani",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/VgmDn7Q/Biryani2.png",
            recipes: "This mutton biryani recipe has layers of mutton and saffron-milk infused rice cooked 'dum' style. It has a host of aromatic spices and herbs such as star anise, bay leaves, cardamom, cinnamon, cloves, jaiphal, and javitri along with chillies, rose water, kewda and saffron cooked with succulent mutton pieces.",
            price: 250
        },
        {
            id: 16,
            type: "Pizza",
            name: "Margherita pizza",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/zHkj4Qv/pizza.png",
            recipes: "Everyone loves pizza, and we’re starting off this awesome list with a margherita pizza that you can make in a skillet. It’s filled with fresh mozzarella, ripe tomatoes, and basil leaves. It’s also got a perfect crispy golden crust!",
            price: 180
        },
        {
            id: 17,
            type: "Pizza",
            name: "Chicken pizza",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/P9TZdzj/pizza1.png",
            recipes: "This Italian favorite pizza is a delicious mix of flat bread or base topped with cheese, chillies, onion, garlic sauce and chunks of chicken. Explore the juiciness of meaty chicken chunks embedded in gooey cheesiness. It can't get better than this.",
            price: 220
        },
        {
            id: 18,
            type: "Pizza",
            name: " Kebab and Paneer Pizza",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/M2bVHCG/pizza2.png",
            recipes: "Think out-of-the-box-cooking, think fusion food. This is what you get when Italian cooking marries Indian flavours. A mouth watering pizza recipe that is sure to tantalize your taste buds. This fusion of Mughlai seekh kebab and Italian pizza recipe is easy and quick.",
            price: 250
        },
        {
            id: 19,
            type: "Pizza",
            name: "bacon breakfast pizza",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/yRSRxbx/pizza3.png",
            recipes: "Sometimes, you just want pizza for breakfast. Why not make this bacon breakfast pizza, so you can enjoy the tasty pizza, while still using traditional breakfast ingredients like crispy bacon and eggs that are perfectly cooked.",
            price: 200
        },
        {
            id: 20,
            type: "Pizza",
            name: "Vegetarian Pizza",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/C7yqH3S/pizza4.png",
            recipes: "Garden fresh veggies come together to create a delicious symphony for your taste-buds. Lots of variety and a harmony of flavours teamed with unmatchable cheesiness, heavenly indeed! This special vegetarian pizza recipe will be loved by kids and adults alike.",
            price: 220
        },
        {
            id: 21,
            type: "Burgers",
            name: "Chilli burger ",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/bgG0013/burger.png",
            recipes: "This scrumptious burger sits under a chilli lamb pattie, roasted bell pepper dip, onions, tomatoes and lettuce.",
            price: 100
        },
        {
            id: 22,
            type: "Burgers",
            name: "Crunchy Chicken and Fish Burger",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/Pc1sGhB/burger1.png",
            recipes: "If a burger for you is all about the meat and protein then you're at the right place. Experience the goodness of chicken, fish and a tangy hot and sour sauce.",
            price: 150
        },
        {
            id: 23,
            type: "Burgers",
            name: "Chicken Feta Cheese Burger",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/0VqGdZX/burger2.png",
            recipes: "Chicken mince marinated with salt, pepper and feta cheese is only the beginning of this ultimate wonder. To accompany this we've got a guilt free potato salad with a yogurt dressing.",
            price: 150
        },
        {
            id: 24,
            type: "Burgers",
            name: "Lentil and Mushroom Burger",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/L1yQLYq/burger3.png",
            recipes: "For the healthy and calorie conscious folks we've got this tasty burger. A lentil, mushroom and sun dried tomato pattie packed between a whole wheat bun.",
            price: 120
        },
        {
            id: 25,
            type: "Burgers",
            name: "Butter Chicken Twin Burgers",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/ctKTdV7/burger4.png",
            recipes: "Made with chicken tikka coated in spicy, delicious makhani gravy filled inside a burger bun. Butter chicken twin burgers are a tasty snack or appetizer for kids and adults alike!.",
            price: 130
        },
        {
            id: 26,
            type: "Sandwich",
            name: "Dahi Sandwich",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/9yq3vTh/sandwich.png",
            recipes: "This Indian version is made using yogurt, and it looks like thick cream cheese. It works as a lovely, creamy base into which you’ll add crunchy diced veggies and a few spices. Fill the bread and cook on medium heat until the outside is golden and the middle is warmed through.",
            price: 80
        },
        {
            id: 27,
            type: "Sandwich",
            name: "Aloo Toast Sandwich",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/0FvkBZZ/sandwich1.png",
            recipes: "Aloo is the Hindi word for potato, and it’s a popular ingredient in Indian cooking. I knew I’d love this recipe once I saw the combination of warm spices and luscious chutney. And it all starts with simple, boiled potatoes. ",
            price: 60
        },
        {
            id: 28,
            type: "Sandwich",
            name: "Indian Bread Omelette",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/JymLshB/sandwich2.png",
            recipes: "Although this sandwich isn’t loaded with spice, it’s actually a super traditional street food in India.You’ll find it at vendors all over the place, and I love that the recipe has gone viral.After all, what could be better than egg-dipped bread wrapped in cheese, served crispy with bacon and scallions.It takes minutes to throw together, and it will fill you up all day long.",
            price: 40
        },
        {
            id: 29,
            type: "Sandwich",
            name: "Paneer Sandwich Recipe",
            vegOrNonVeg: "https://i.ibb.co/vVJp5H7/veg.png",
            image: "https://i.ibb.co/7YDqsML/sandwich3.png",
            recipes: "Paneer is a milky type of soft cheese that looks just like cheese curds, though the texture is more like feta (crumbly).It’s sliceable and super mild, and since it doesn’t melt like regular cheese, it holds its shape in everything from toasted sandwiches to curries. Mix it with veggies, spices, and a little tomato paste for something pretty unique and hard to resist.",
            price: 80
        },
        {
            id: 30,
            type: "Sandwich",
            name: "Avocado Tandoori Chicken Sandwich",
            vegOrNonVeg: "https://i.ibb.co/MRF3RSX/nonveg.png",
            image: "https://i.ibb.co/ryk2SmB/sandwich4.png",
            recipes: "First of all, how amazing does this Indian sandwich look? That bright green against the vibrant tandoori chicken has me drooling. And it tastes even better than it looks. Keep it simple with smashed avocado and chicken, or ramp it up with some crunchy red onions and green chilies.",
            price: 100
        },]
    },
];

export const mealList = [
    {
        id: 1,
        mealName: "Breakfast",
        mealDetail: "Start your day with exclusive breakfast options",
        image: `${breakfast}`,
    },
    {
        id: 2,
        mealName: "Lunch",
        mealDetail: "Start your day with exclusive breakfast options",
        image: `${lunch}`,
    },
    {
        id: 3,
        mealName: "Snacks",
        mealDetail: "Start your day with exclusive breakfast options",
        image: `${snacks}`,
    },
    {
        id: 4,
        mealName: "Dinner",
        mealDetail: "Start your day with exclusive breakfast options",
        image: `${dinner}`,
    },
    {
        id: 5,
        mealName: "Drinks",
        mealDetail: "Start your day with exclusive breakfast options",
        image: `${drink}`,
    },
    {
        id: 6,
        mealName: "Nightlife",
        mealDetail: "Start your day with exclusive breakfast options",
        image: `${nightlife}`,
    },
];

export const CuisineList = [
    {
        value: 1,
        label: "North Indian",
    },
    {
        value: 2,
        label: "South Indian",
    },
    {
        value: 3,
        label: "Chinese",
    },
    {
        value: 4,
        label: "Fast Food",
    },
    {
        value: 5,
        label: "Street Food",
    },
];

export const CostForTwoList = [
    {
        value: 1,
        label: "Less than $ 500",
    },
    {
        value: 2,
        label: "$ 500 to $ 1000",
    },
    {
        value: 3,
        label: "$ 1000 to$  1500",
    },
    {
        value: 4,
        label: "$ 1500 to$  2000",
    },
    {
        value: 5,
        label: "$ 2000",
    },
];

export const SortList = [
    {
        value: 1,
        label: "Price low to high",
    },
    {
        value: 2,
        label: "Price high to low",
    },
];