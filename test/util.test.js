var assert = require('assert');
var util = require("../util");

describe('isEaualProps', function() {
    it('should return true when the props is equal', function() {
        let a = {
            underline: true,
            backgroundColor: "rgba(255, 125, 128)",
            link: "www.smartface.io",
            ios: {
                underlineColor: "rgba(255, 145, 128)",
                strikethroughColor: "rgba(255, 145, 125)"
            },
            font: {
                bold: false,
                italic: true,
                family: "TimesNewRoman",
                size: 13
            }
        };
        let b = {
            underline: true,
            backgroundColor: "rgba(255, 125, 128)",
            link: "www.smartface.io",
            ios: {
                underlineColor: "rgba(255, 145, 128)",
                strikethroughColor: "rgba(255, 145, 125)"
            },
            font: {
                bold: false,
                italic: true,
                family: "TimesNewRoman",
                size: 13
            }
        };
        assert.equal(util.isEqualProps(a, b), true);
    });

    it('should return false when the props is not equal', function() {
        let a = {
            underline: true,
            backgroundColor: "rgba(255, 125, 128)",
            link: "www.smartface.io",
            font: {
                bold: false,
                italic: true,
                family: "TimesNewRoman",
                size: 13
            },
            ios: {
                underlineColor: "rgba(255, 145, 128)"
            }
        };
        let b = {
            underline: true,
            backgroundColor: "rgba(255, 125, 128)",
            link: "www.smartface.io",
            font: {
                bold: false,
                italic: true,
                family: "TimesNewRoman",
                size: 13
            },
            ios: {
                underlineColor: "rgba(255, 145, 128)",
                strikethroughColor: "rgba(255, 145, 125)"
            }
        };

        assert.equal(util.isEqualProps(a, b), false);
    });
});


describe('isEqualFontProps', function() {
    it('should return true when the font props is equal', function() {
        let a = {
            bold: false,
            italic: true,
            family: "TimesNewRoman",
            size: 13
        };
        let b = {
            bold: false,
            italic: true,
            family: "TimesNewRoman",
            size: 13

        };
        assert.equal(util.isEqualFontProps(a, b), true);
    });

    it('should return true when the font props is not equal', function() {
        let a = {
            bold: false,
            italic: true,
            family: "TimesOldRoman",
            size: 13
        };
        let b = {
            bold: false,
            italic: true,
            family: "TimesNewRoman",
            size: 13

        };
        assert.equal(util.isEqualFontProps(a, b), false);
    });

});

describe('clearProps', function() {
    it(' when the clear props should return { ios: { strikethroughColor: "rgba(255, 200, 128)" } }', function() {
        let t = {
            backgroundColor: "transparent",
            underlineColor: "rgba(255, 125, 128)",
            strikethroughColor: "rgba(255, 200, 128)"
        };

        let clear = {
            ios: { strikethroughColor: "rgba(255, 200, 128)" }
        };

        assert.deepEqual(util.clearProps(t), clear);
    });

    it(' when the clear props should return { underline:true, ios: { strikethroughColor: "rgba(255, 200, 128)" } }', function() {
        let t = {
            backgroundColor: "transparent",
            underline: true,
            strikethroughColor: "rgba(255, 200, 128)"
        };

        let clear = {
            underline: true,
            ios: { strikethroughColor: "rgba(255, 200, 128)" }
        };

        assert.deepEqual(util.clearProps(t), clear);
    });
});



describe('updateTextDecorationColors', function() {
    it(' when the underline true and underlineColor is not defined define the underlineColor "#000000" ', function() {
        let t = {
            underline: true,
            backgroundColor: "transparent",
            strikethroughColor: "rgba(255, 200, 128)"
        };
        util.updateTextDecorationColors(t);
        assert.equal("#000000", t.underlineColor);
    });

    it(' when the underline true and underlineColor is defined no affect the underlineColor', function() {
        let t = {
            underline: true,
            backgroundColor: "transparent",
            underlineColor: "rgba(255, 200, 128)"
        };
        util.updateTextDecorationColors(t);
        assert.equal("rgba(255, 200, 128)", t.underlineColor);
    });
});



describe('isPlainAttributedText', function() {
    it(' when the attributedText have different style should return false', function() {
        let t = {
            underline: true,
            backgroundColor: "rgba(50, 200, 128)",
            foregroundColor: "rgba(54, 72, 15)",
            ios: {
                strikethroughColor: "rgba(255, 200, 128)"
            },
            font: {
                bold: false,
                italic: true,
                family: "TimesOldRoman",
                size: 13
            }
        };


        assert.equal(util.isPlainAttributedText(t), false);
    });

    it(' when the attributedText have not different style should return true', function() {
        let t = {};
        assert.equal(util.isPlainAttributedText(t), true);
    });

});
