function displayRadioValue () {
    const genders = document.querySelectorAll('input[name="gender"]');
    let select;
    for (const c of genders) {
        if (c.checked) {
            select = c.value;
            break;
        }
    }
    alert(select);
}

function displayRadioValueColor () {
    const colors = document.querySelectorAll('input[name="color"]');
    let select;
    for (const c of colors) {
        if (c.checked) {
            select = c.value;
            break;
        }
    }
    alert(select);
}