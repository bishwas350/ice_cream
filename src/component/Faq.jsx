import React from 'react'
import Container from './Container'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Faq = () => {
    return (
        <>
            <main>
                <div className="">
                    <Container>
                        <div className="p-4 font-apa text-[#646464] dark:text-gray-300">
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>1. What makes your ice cream special?</AccordionTrigger>
                                    <AccordionContent>
                                        Our ice cream is made with 100% natural ingredients, sourced from the finest dairy farms and blended with real fruits, chocolates, and nuts to give you a creamy, delicious experience.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>2. Do you offer dairy-free or vegan options?
                                    </AccordionTrigger>
                                    <AccordionContent>
                                    Yes! We have a range of dairy-free and vegan-friendly ice cream flavors made with plant-based ingredients like almond milk and coconut cream.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>3. Can I place an online order?
                                    </AccordionTrigger>
                                    <AccordionContent>
                                    Absolutely! You can browse our menu and place an order through our website. We offer both delivery and in-store pickup options.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger>4. Do you have any sugar-free options?
                                    </AccordionTrigger>
                                    <AccordionContent>
                                    Yes, we offer sugar-free and low-calorie ice cream options for those who are health-conscious or have dietary restrictions.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-5">
                                    <AccordionTrigger>5. Can I customize my ice cream flavor?
                                    </AccordionTrigger>
                                    <AccordionContent>
                                    Of course! You can mix and match flavors, add your favorite toppings, and create your own unique ice cream experience.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-6">
                                    <AccordionTrigger>6. Where do you deliver?
                                    </AccordionTrigger>
                                    <AccordionContent>
                                    We currently deliver within the city limits and surrounding areas. You can check our delivery zones at checkout.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-7">
                                    <AccordionTrigger>7. Do you cater for events and parties?
                                    </AccordionTrigger>
                                    <AccordionContent>
                                    Yes, we provide catering services for birthdays, weddings, and corporate events. Contact us to customize your ice cream bar or dessert table.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-8">
                                    <AccordionTrigger>8. What are your opening hours?
                                    </AccordionTrigger>
                                    <AccordionContent>
                                    Our ice cream parlor is open daily from 10 AM to 10 PM. Online orders are accepted 24/7.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-9">
                                    <AccordionTrigger>9. Can I buy gift cards?
                                    </AccordionTrigger>
                                    <AccordionContent>
                                    Yes! We offer digital and physical gift cards that make the perfect treat for ice cream lovers.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-10">
                                    <AccordionTrigger>10. How can I contact customer support?
                                    </AccordionTrigger>
                                    <AccordionContent>
                                    You can reach us via email at info@icedelights.com or call us at +5689 2589 6325 for any inquiries.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                        </div>
                    </Container>
                </div>
            </main>
        </>
    )
}

export default Faq