function getRandomNumber(min, max) {
    return (Math.random() * (max-min)) + min;
};

const nameList = ['cylinder', 'pyramid', 'tetrahydron', 'sphere', 'solid',
    'cylinder', 'pyramid', 'tetrahydron', 'sphere', 'solid',
    'cylinder', 'pyramid', 'tetrahydron', 'sphere', 'solid',
    'cylinder', 'pyramid', 'tetrahydron', 'sphere', 'solid']

export function getNameWith10To20() {
    const min = 10, max = 20;
   return `${getColor()}-${nameList[parseInt(getRandomNumber(10, 10*nameList.length - 1)/10)]}-${getRandomNumber(min,max)}`
};

export function getNameWith20To30() {
    const min = 20, max = 30;
   return `${getColor()}-${nameList[parseInt(getRandomNumber(10, 10*nameList.length - 1)/10)]}-${getRandomNumber(min,max)}`
};

const color = `blue`;
export function getColor() {
   return `${color}`
};

export function getVersion() {
    var pjson = require('./package.json');
    return pjson.version;

}