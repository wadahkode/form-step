/**
 * form step by step
 * 
 * @author wadahkode <mvp.dedefilaras@gmail.com>
 * @license MIT
 */
const formOrder = props => {
    if (typeof props === "object") {
        props.forEach(id => {
            let elem = document.querySelector("#" + id);
            elem.addEventListener("change", createState);
        });
    } else {
        let elem = document.querySelector("#" + id);
        // event change
        elem.addEventListener("change", createState);
    }
};

// execute
/*formOrder([
    "fullname", "email", "phone", "kategori"
]);*/

// fungsi state
function createState(props) {
    let elements = props.target.form.elements;
    const btnNextOrder = document.querySelector(".btn-next-order");
    
    let prependInput = (
        elements.namedItem("fullname").value !== ""
        && elements.namedItem("email").value !== ""
        && elements.namedItem("phone").value !== ""
        && elements.namedItem("kategori").value !== ""
    );
    
    if (prependInput) {
        btnNextOrder.removeAttribute("disabled");
    } else {
        btnNextOrder.setAttribute("disabled", "");
    }
}

// event button next order
const btnNextOrder = document.querySelector(".btn-next-order"),
    btnPreviousOrder = document.querySelector(".btn-previous-order");
    
btnNextOrder.addEventListener("click", e => {
    const target = e.target;
    
    const stepFinish = document.querySelector("#" + target.dataset.target);
    const stepBefore = stepFinish.parentNode.previousElementSibling;
    const stepBeforeTab = document.querySelector(stepBefore.children[0].hash);
    const stepFinishTab = document.querySelector(stepFinish.hash);
    
    if (stepBefore.children[0].classList.contains("active")) {
        stepBefore.children[0].classList.remove("active");
        stepBefore.children[0].classList.add("disabled");
    }
    
    if (!stepBefore.children[0].classList.contains("active")
        && stepFinish.classList.contains("disabled")) {
        stepFinish.classList.remove("disabled");
        stepFinish.classList.add("active");
    }
    stepBeforeTab.classList.remove("active");
    stepFinishTab.classList.add("active");
});

// event button previous order
btnPreviousOrder.addEventListener("click", e => {
    const target = e.target;
    
    const stepBefore = document.querySelector("#" + target.dataset.target);
    const stepFinish = stepBefore.parentNode.nextElementSibling;
    const stepFinishTab = document.querySelector(stepFinish.children[0].hash);
    const stepBeforeTab = document.querySelector(stepBefore.hash);
    
    if (stepFinish.children[0].classList.contains("active")) {
        stepFinish.children[0].classList.remove("active");
        stepFinish.children[0].classList.add("disabled");
    }
    
    if (!stepFinish.children[0].classList.contains("active")
        && stepBefore.classList.contains("disabled")) {
        stepBefore.classList.remove("disabled");
        stepBefore.classList.add("active");
    }
    stepFinishTab.classList.remove("active");
    stepBeforeTab.classList.add("active");
});

function handleChange(event) {
    var elements = event.form.elements,
        prependInput = false;
    
    prependInput = (
        elements.namedItem("fullname").value !== ""
        && elements.namedItem("email").value !== ""
        && elements.namedItem("phone").value !== ""
        && elements.namedItem("kategori").value !== ""
    );
    
    if (prependInput) {
        event.form.querySelector('.btn-next-order').removeAttribute("disabled");
    } else {
        event.form.querySelector('.btn-next-order').setAttribute("disabled", "");
    }
}