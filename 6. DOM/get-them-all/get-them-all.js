let architects, nonArchitects, classical, nonClassical, active, nonActive;

const initialize = () => {
    architects = Array.from(document.getElementsByTagName('a'));
    nonArchitects = Array.from(document.getElementsByTagName('span'));
    classical = architects.filter(el => el.classList.contains('classical'));
    nonClassical = architects.filter(el => !classical.includes(el));
    active = classical.filter(el => el.classList.contains('active'));
    nonActive = classical.filter(el => !el.classList.contains('active'));
};

const getArchitects = () => (initialize(), [architects, nonArchitects])
const getClassical = () => (initialize(), [classical, nonClassical])
const getActive = () => [active, nonActive]
const getBonannoPisano = () => [document.getElementById(""), active]

export { getArchitects, getClassical, getActive, getBonannoPisano }