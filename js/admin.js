const form = document.getElementById('admin-form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
        const res = await fetch("http://localhost:5000/products", {
            method: 'post',
            body: formData,
        });

        const body = await res.json();

        alert(body?.message);

    } catch (err) {

        console.log(err);
    }

    event.target.reset();

});