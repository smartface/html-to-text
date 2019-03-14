var assert = require('assert');
var createAttributedStrings = require("../index");




describe('createAttributedStrings', function() {

    it(' when the createAttributedStrings take html data and create object', function() {
        let html = "<span style=\"font-size: 24px; color: rgb(0, 0, 0); text-decoration-color: rgb(0, 0, 0);\"><span style=\"font-family: Nunito-LightItalic; font-size: 24px; background-color: transparent; color: rgb(0, 0, 0); text-decoration-color: rgb(0, 0, 0);\">Your </span><font face=\"ios-Default-Bold\" style=\"font-size: 24px; font-family: ios-Default-Regular; background-color: transparent; color: rgb(0, 0, 0); text-decoration-color: rgb(0, 0, 0);\">attributed </font><span style=\"text-decoration-line: underline; color: rgb(139, 87, 42); font-size: 24px; font-family: ios-Default-Regular; background-color: transparent; text-decoration-color: rgb(0, 0, 0);\">Stri<span style=\"color: rgb(139, 87, 42); text-decoration-line: underline ; text-decoration-color: rgb(0, 0, 0); font-size: 24px; font-family: ios-Default-Regular; background-color: transparent;\">ngs</span></span></span><div><span style=\"font-size: 16px; font-family: ios-Default-Regular; text-decoration-color: rgb(0, 0, 0);\"><span style=\"text-decoration-line: underline; font-size: 16px; font-family: ios-Default-Regular; text-decoration-color: rgb(0, 0, 0);\"><span style=\"text-decoration-line: underline; text-decoration-color: rgb(0, 0, 0); font-size: 24px; font-family: ios-Default-Regular; background-color: rgb(189, 16, 224);\">second</span></span></span></div><div><span style=\"font-size: 16px; font-family: ios-Default-Regular; text-decoration-color: rgb(0, 0, 0);\"><span style=\"text-decoration-line: underline; font-size: 16px; font-family: ios-Default-Regular; text-decoration-color: rgb(0, 0, 0);\"><span style=\"text-decoration-line: underline; text-decoration-color: rgb(0, 0, 0); font-size: 16px; font-family: ios-Default-Regular; background-color: rgb(189, 16, 224); color: rgb(248, 231, 28);\">Third</span></span></span></div>";
        let expected = [{
                    font: {
                        family: 'Nunito',
                        style: 'LightItalic',
                        bold: false,
                        italic: true,
                        size: 24
                    },
                    foregroundColor: 'rgb(0, 0, 0)',
                    string: 'Your '
                },
                {
                    font: {
                        family: 'Default',
                        style: 'Bold',
                        bold: true,
                        italic: false,
                        size: 24
                    },
                    foregroundColor: 'rgb(0, 0, 0)',
                    string: 'attributed '
                },
                {
                    font: {
                        family: 'Default',
                        style: 'Regular',
                        bold: false,
                        italic: false,
                        size: 24
                    },
                    foregroundColor: 'rgb(139, 87, 42)',
                    underline: true,
                    string: 'Strings\n',
                    ios: { underlineColor: 'rgb(0, 0, 0)' }
                },
                {
                    font: {
                        family: 'Default',
                        style: 'Regular',
                        bold: false,
                        italic: false,
                        size: 24
                    },
                    backgroundColor: 'rgb(189, 16, 224)',
                    underline: true,
                    string: 'second\n',
                    ios: { underlineColor: 'rgb(0, 0, 0)' }
                },
                {
                    font: {
                        family: 'Default',
                        style: 'Regular',
                        bold: false,
                        italic: false,
                        size: 16
                    },
                    backgroundColor: 'rgb(189, 16, 224)',
                    foregroundColor: 'rgb(248, 231, 28)',
                    underline: true,
                    string: 'Third',
                    ios: { underlineColor: 'rgb(0, 0, 0)' }
                }
            ];
        assert.deepEqual(createAttributedStrings(html), expected);
    });

});
