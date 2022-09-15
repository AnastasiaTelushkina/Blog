import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const mainFolder = '.';

export const path = {
    build: {
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`,
    },
    src: {
        html: `${mainFolder}/*.html`,
        files: `${mainFolder}/files/**/*.*`,
    },
    watch: {
        html: `${mainFolder}/**/*.html`,
        files: `${mainFolder}/files/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    mainFolder: mainFolder,
    rootFolder: rootFolder,
    ftp: ""
}