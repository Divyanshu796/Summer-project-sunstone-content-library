function filterContent() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const contentItems = document.getElementsByClassName('content-item');

    for (let i = 0; i < contentItems.length; i++) {
        const item = contentItems[i];
        const tags = item.getAttribute('data-tags');

        if (tags.toLowerCase().includes(searchValue)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    }
}

