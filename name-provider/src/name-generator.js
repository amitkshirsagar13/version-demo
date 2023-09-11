function getRandomNumber(min, max) {
    return `${(Math.random() * (max-min)) + min}`;
};

function getRandomNumberWithVersion(min, max) {
    return `version: ${getVersion()}|${(Math.random() * (max-min)) + min}`;
};

const nameList = ['cylinder', 'pyramid', 'tetrahydron', 'sphere', 'solid',
    'cylinder', 'pyramid', 'tetrahydron', 'sphere', 'solid',
    'cylinder', 'pyramid', 'tetrahydron', 'sphere', 'solid',
    'cylinder', 'pyramid', 'tetrahydron', 'sphere', 'solid']

export function getNameWith10To20() {
    const min = 10, max = 20;
    const index = parseInt(getRandomNumber(10, 10*nameList.length - 1)/10);
    return `${getColor()}-+[${index}]+${nameList[index]}-${getRandomNumberWithVersion(min,max)}`;
};

export function getNameWith20To30() {
    const min = 20, max = 30;
    const index = parseInt(getRandomNumber(10, 10*nameList.length - 1)/10);
    return `${getColor()}-+[${index}]+${nameList[index]}-${getRandomNumberWithVersion(min,max)}`;
};

const color = `blue`;
export function getColor() {
   return `${color}`
};

export function getVersion() {
    var pjson = require('../package.json');
    return pjson.version;
}