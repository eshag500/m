document.addEventListener('DOMContentLoaded', () => {
    const propertyGrid = document.getElementById('propertyGrid');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    // بيانات العقارات (يمكن استبدالها ببيانات من API لاحقًا)
    const properties = [
     
        {
            id: 2,
            title: 'فيلا مستقلة للإيجار',
            location: 'دار البركة، شارع الطينطان ',
            price: '80,000 أوقية/سنة',
            type: 'فيلا',
            description: 'فيلا واسعة مع حديقة ومسبح، مثالية للعائلات.',
            image: 's.jpg'
        },
        
        {
            id: 4,
            title: 'شقة مفروشة للإيجار',
            location: 'بوحديدة، طريق الأمل',
            price: '15,000 أوقية/شهر',
            type: 'شقة',
            description: 'شقة مفروشة بالكامل في موقع حيوي.',
            image: 'img/property4.jpg'
        },
        {
            id: 5,
            title: 'شقة مفروشة للإيجار',
            location: 'نواكشوط، صحراوي',
            price: '15,000 أوقية/شهر',
            type: 'شقة',
            description: 'شقة مفروشة بالكامل في موقع حيوي.',
            image: 'm.jpg'
                }
        // أضف المزيد من العقارات هنا
    ];

    // دالة لعرض العقارات
    function displayProperties(filteredProperties) {
        propertyGrid.innerHTML = ''; // مسح العقارات الحالية
        if (filteredProperties.length === 0) {
            propertyGrid.innerHTML = '<p style="text-align: center; width: 100%;">لا توجد عقارات مطابقة لبحثك.</p>';
            return;
        }

        filteredProperties.forEach(property => {
            const propertyCard = document.createElement('div');
            propertyCard.classList.add('property-card');

            propertyCard.innerHTML = `
                <img src="${property.image}" alt="${property.title}">
                <div class="property-info">
                    <h4>${property.title}</h4>
                    <p><strong>الموقع:</strong> ${property.location}</p>
                    <p><strong>النوع:</strong> ${property.type}</p>
                    <p>${property.description}</p>
                    <div class="price">${property.price}</div>
                </div>
            `;
            propertyGrid.appendChild(propertyCard);
        });
    }

    // دالة للبحث عن العقارات
    function searchProperties() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredProperties = properties.filter(property =>
            property.title.toLowerCase().includes(searchTerm) ||
            property.location.toLowerCase().includes(searchTerm) ||
            property.type.toLowerCase().includes(searchTerm) ||
            property.description.toLowerCase().includes(searchTerm)
        );
        displayProperties(filteredProperties);
    }

    // عرض جميع العقارات عند تحميل الصفحة
    displayProperties(properties);

    // إضافة مستمعي الأحداث لزر البحث ومربع الإدخال
    searchButton.addEventListener('click', searchProperties);
    searchInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            searchProperties();
        }
    });
});
