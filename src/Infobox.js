
import "./infobox.css"
import { useState , useEffect} from "react";

function Infobox(){

    // const [title, setTitle] = useState("Reminder:")
    // const [text, setText] = useState("Voluptate cupidatat velit aute sint do amet deserunt duis laborum dolore. Sit in nulla amet voluptate aute enim nulla incididunt irure proident nulla consectetur magna. Magna occaecat magna commodo adipisicing magna. Proident ex ut excepteur et enim reprehenderit sit Lorem cillum consequat.")
    const [index, setIndex] = useState(0)
    const [fade, setFade] = useState('fade-in')
    
    let messages = [
        {
            "title": "Reminder:",
            "text": "Excepteur commodo laborum deserunt consequat nulla amet adipisicing excepteur nulla magna nostrud velit eu deserunt. Anim elit nulla consectetur consectetur dolore magna. Qui reprehenderit nulla incididunt id qui anim. Nulla in amet consectetur anim laborum do consectetur ullamco proident. Lorem incididunt exercitation adipisicing ut quis Lorem qui aute labore tempor. Ipsum sit Lorem consequat nulla non duis. Cupidatat cillum nulla officia cillum proident ad incididunt labore velit in eu qui sit commodo."
        },
        {
            "title": "Reminder:",
            "text": "Sint sit mollit occaecat cillum voluptate cupidatat elit. Consectetur cupidatat aliquip ipsum et commodo aute. Ut elit incididunt dolore quis reprehenderit dolore enim consequat. Culpa aute duis id in culpa dolore labore Lorem et minim."
        },
        {
            "title": "Reminder:",
            "text": "Labore minim nulla officia elit esse commodo sint ex tempor. Consectetur incididunt tempor reprehenderit veniam ex esse cupidatat duis non qui. Minim et pariatur in sint non elit Lorem cillum nostrud cillum fugiat."
        },
        {
            "title": "Reminder:",
            "text": "Voluptate cupidatat velit aute sint do amet deserunt duis laborum dolore. Sit in nulla amet voluptate aute enim nulla incididunt irure proident nulla consectetur magna. Magna occaecat magna commodo adipisicing magna. Proident ex ut excepteur et enim reprehenderit sit Lorem cillum consequat."
        }
    ]

    useEffect(()=>{   

        setFade('fade-in')
        setTimeout(
            () => {
                setFade('fade-out')
                setTimeout(
                    ()=>{
                        setIndex((index+1)%messages.length)
                    }, 1100);
            },10000);

        
    }, [index, messages.length]);

    return(
        <div className={`Infobox ${fade}`} >
            <h2>{messages[index].title}</h2>
            <p>{messages[index].text}</p>
        </div>
    );
}

export default Infobox;