browser.windows.onCreated.addListener(themeWindow);

// Theme all currently open windows
browser.windows.getAll().then(wins => wins.forEach(themeWindow));

function themeWindow(window) {

  // Check if the window is in private browsing
  //if (!window.incognito) {
    browser.theme.update(window.id, {

        "colors": {
                "accentcolor": "#49627a",
                "textcolor": "#000000",

                "button_background_hover": "#718da3",
                "button_background_active": "#516d83",

                "icons": "#000000",
                //"icons_attention": "red",

                "popup": "#819da3",
                "popup_text": "#000000",
                "popup_highlight": "#516d73",
                "popup_highlight_text": "#00000",

                "tab_text": "#dadada",
                "tab_line": "#19324d",
                "tab_selected": "#19324d",
                "tab_loading": "#94814c",

                "tab_background_separator": "#19324d",
                
                "toolbar": "#39526d",
                "toolbar_text": "#000000",
                "toolbar_field": "#213d53",
                "toolbar_field_focus": "#19324d",
                "toolbar_field_text": "#91bdc3",
                "toolbar_field_text_focus": "#91bdc3",
                "toolbar_field_border": "#213d53",
                "toolbar_field_border_focus": "#19324d",
                "toolbar_field_separator": "#39526d",
                "toolbar_top_separator": "#324b67",
                "toolbar_vertical_separator": "#354d6a",
                "toolbar_bottom_separator": "#154f6a"
            }
    });
 // }
  // Reset to the default theme otherwise
  // else {
  //   browser.theme.reset(window.id);
  // }
}
