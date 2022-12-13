const anagram = (str1, str2) => {
    // mettre str1 str2 en minuscule;
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    // supprimer les espace
    const str1Min = str1.replaceAll(' ', '');
    const str2Min = str2.replaceAll(' ', '');
    // comparer les lettres str1 /str2
    if (str1Min.lenght === str2Min.lenght) {
        // decomposer str1 et str2
        const str1Tab = str1Min.split('');
        const str2Tab = str2Min.split('');
        //trier str1 et str2
        const str1Sort = str1Tab.sort();
        const str2Sort = str2Tab.sort();
        //comparer les 2 elements
        str1 = str1Sort.join('');
        str2 = str2Sort.join('');   
        if (str1.includes(str2)===true) {
            return true;       
        }else{
            return false;
        }
    }else{
        return false
    }
};

module.exports = anagram;
