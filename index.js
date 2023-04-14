const form = document.querySelector('.insurance-record-form');
const textarea = document.querySelector('#total');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const xml = new DOMParser().parseFromString('<request></request>', 'application/xml');
    const requestElement = xml.documentElement;

    for (const [id, value] of formData) {
        const fieldElement = xml.createElement(id);
        fieldElement.textContent = value;
        requestElement.appendChild(fieldElement);
    }

    const xmlString = new XMLSerializer().serializeToString(xml);
    var beautifiedXmlText = new XmlBeautify().beautify(xmlString,
        {
            indent: "  ",
            useSelfClosingElement: true
        });
        textarea.value = beautifiedXmlText;
});