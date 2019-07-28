
var default_theme =  {
    "colors": {

                //"frame": "#49627a",
                "frame": "#39526D",
                "frame_inactive": "#39526D", 
                
                "icons": "#000000",
                "icons_attention": "#000000",
                "button_background_hover": "#19324D",
                "button_background_active": "#19324D",
                "bookmark_text": "#000000",

                "popup": "#819da3",
                "popup_border": "#819da3",
                "popup_text": "#000000",
                "popup_highlight": "#49627a",
                "popup_highlight_text": "#00000",

                "tab_text": "#A7ABC7",
                "tab_background_text": "#000000",
                "tab_line": "#19324d",
                "tab_selected": "#19324d",
                "tab_loading": "#94814c",
                
                "tab_background_separator": "#19324d",

                "toolbar": "#39526d",
                "toolbar_text": "#000000",
                "toolbar_field": "#213d53",
                "toolbar_field_text": "#91bdc3",
                "toolbar_field_focus": "#19324d",
                "toolbar_field_text_focus": "#91bdc3",
                "toolbar_field_highlight": "#819DA3",
                "toolbar_field_highlight_text": "#000000",
                "toolbar_field_border": "#213d53",
                "toolbar_field_border_focus": "#19324d",
                "toolbar_field_separator": "#39526d",
                "toolbar_top_separator": "#324b67",
                "toolbar_vertical_separator": "#354d6a",
                "toolbar_bottom_separator": "#154f6a",

                "ntp_background": "#1a3344",
                "ntp_text": "#6a6e71",

                "sidebar": "#819DA3",
                "sidebar_border": "#819DA3",
                "sidebar_text": "#000000",
                "sidebar_separator": "#000000",

                "sidebar_highlight": "#314D63",
                "sidebar_highlight_text": "#000000"
            }
    }

browser.windows.onCreated.addListener(themeWindow);

// Theme all currently open windows
function apllyThemeSettings() {
    browser.windows.getAll().then(wins => wins.forEach(themeWindow));
}

function themeWindow(window) {
    browser.storage.local.get(default_theme, 
        prefs => {
            default_theme = Object.assign(default_theme || [], prefs);
            browser.theme.update(window.id, default_theme);
    });
}

browser.storage.onChanged.addListener(ps => {
    apllyThemeSettings();
});

apllyThemeSettings();

