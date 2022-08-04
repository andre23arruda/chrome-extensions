function modifyDOM() {
    const query_list = ['#detecta-adblock', '.barreiraJornada']
    for (query of query_list) {
        element = document.querySelector(query)
        if (element)
            element.style.setProperty('position', 'inherit')
    }
    document.body.style.setProperty('overflow', 'auto')
    document.querySelector('html').style.setProperty('overflow', 'auto')
}

modifyDOM()
