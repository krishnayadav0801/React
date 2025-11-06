function customRender(obj, continer) {
    let a = document.createElement(obj.type);
    console.log(a)
    for (const key in obj.props) {
        console.log(key)
        a.setAttribute(key, obj.props[key])
    }
    a.innerHTML = obj.children;
    continer.appendChild(a)
}

const reactElement = {
    type: "a",
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'hello i am anchor'
}

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer)