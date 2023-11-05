import aboutImage from "../assets/images/about-image.png";

export const About = () => {

    return (
        <div className="bg-white">
            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h2 className="text-2xl font-medium">About Us</h2>
                    <p className="text-lg">
                    About Us

At <b>The Pizza Bay</b> , we're passionate about bringing the joy of delicious food right to your doorstep. We believe that great food is more than just nourishment; it's an experience, a journey through flavors and cultures that connect people.

Our Story

It all started with a simple idea: to make food delivery easy, convenient, and, most importantly, scrumptious. We envisioned a platform where you could explore a world of culinary delights without leaving your home. That's how <b>The Pizza Bay</b> was born.

What We Stand For

Quality: We're committed to quality. From the freshest ingredients to the most skilled chefs, we ensure every dish meets the highest standards.

Variety: Our menu is a world tour of flavors. Whether you crave a comforting classic or want to venture into something new and exciting, we've got it all.

Convenience: Ordering with us is a breeze. Just a few clicks, and your favorite meal is on its way. No need to worry about cooking or cleaning up.

Community: We're more than just a food delivery service. We're a community of food lovers, sharing the love for great meals and great moments.

Our Team

Behind the scenes, there's a dedicated team of food enthusiasts, tech wizards, and delivery experts working tirelessly to make your experience exceptional. We're here to make your food dreams come true.

Join Us on this Delicious Journey

We invite you to join us on this mouthwatering adventure. Explore our menu, savor the flavors, and let us be a part of your culinary journey. Thank you for choosing The Pizza Bay for your next meal.

Have a question or feedback? Contact us at <b>'Pizzabay@iamhungry.com'</b>.

Feel free to customize this "About Us" section to fit the unique personality and values of your food ordering website. You can also include any specific details, such as your company's history, team members, and contact information, as needed.






                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt="" className="w-[400px] h-[400px] object-cover" />
                </div>
            </div>
        </div>
    )
}