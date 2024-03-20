(()=>{"use strict";var e={n:t=>{var a=t&&t.__esModule?()=>t.default:()=>t;return e.d(a,{a}),a},d:(t,a)=>{for(var o in a)e.o(a,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:a[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.element,a=window.wp.plugins,o=window.wp.editPost,r=window.wp.components,n=window.wp.apiFetch;var l=e.n(n);const __=wp.i18n.__;(0,a.registerPlugin)("trx-addons-ai-helper-setting-panel",{render:()=>{const[e,a]=(0,t.useState)(!1),n=TRX_ADDONS_STORAGE.ai_helper_list_models,[s,i]=(0,t.useState)("gpt-3.5-turbo"),c=TRX_ADDONS_STORAGE.ai_helper_list_commands,[p,_]=(0,t.useState)("write_blog"),d=TRX_ADDONS_STORAGE.ai_helper_list_text_tones,[m,h]=(0,t.useState)("normal"),u=[];Object.keys(d).forEach((function(e){u.push({label:d[e],value:e})}));const g=TRX_ADDONS_STORAGE.ai_helper_list_text_languages,[w,b]=(0,t.useState)("english"),S=[];Object.keys(g).forEach((function(e){S.push({label:g[e],value:e})}));const x=TRX_ADDONS_STORAGE.ai_helper_list_bases,[O,E]=(0,t.useState)("prompt"),f=[];Object.keys(x).forEach((function(e){"title"==e&&p.indexOf("write_")<0&&"process_translate"!=p||"excerpt"==e&&"process_translate"!=p||["selected","content"].indexOf(e)>=0&&0===p.indexOf("write_")||f.push({label:x[e],value:e})}));const[A,R]=(0,t.useState)("prompt"==O?c[p].prompt:""),[T,k]=(0,t.useState)(""),v=(e,t)=>{if(e&&e.hasOwnProperty("finish_reason")&&"queued"==e.finish_reason){var o=e.fetch_time?e.fetch_time:2e3;setTimeout((function(){(e=>{!async function(){var t=!1,a="";try{t=await l()({path:"/ai-helper/v1/fetch-answer",method:"POST",data:{thread_id:e.thread_id,run_id:e.run_id}})}catch(e){t=!1,a=e.message}v(t,a)}()})(e)}),o)}else if(a(!1),e&&e.hasOwnProperty("data")&&e.hasOwnProperty("error"))if(e.data.hasOwnProperty("text")&&e.data.text){var r=e.data.text,n="",s=c[p].variations;if(s)for(var i=0;i<r.length;i++)n+='<label class="trx_addons_ai_helper_response__variant"><input name="trx_addons_ai_helper_response__variant" type="radio" value="'+r[i]+'">'+r[i]+"</label>";else n='<textarea class="trx_addons_ai_helper_response__content" name="trx_addons_ai_helper_response__content" rows="15">'+trx_addons_esc_html(r[0])+"</textarea>";var _=[TRX_ADDONS_STORAGE.msg_ai_helper_bt_caption_replace,TRX_ADDONS_STORAGE.msg_ai_helper_bt_caption_append,TRX_ADDONS_STORAGE.msg_caption_cancel];["process_title","process_excerpt"].indexOf(p)>=0?_=[TRX_ADDONS_STORAGE.msg_caption_apply,TRX_ADDONS_STORAGE.msg_caption_cancel]:"process_heading"==p&&(_=[TRX_ADDONS_STORAGE.msg_ai_helper_bt_caption_prepend,TRX_ADDONS_STORAGE.msg_caption_cancel]),trx_addons_msgbox_dialog('<form name="trx_addons_ai_helper_response" class="trx_addons_ai_helper_response">'+n+"</form>",TRX_ADDONS_STORAGE["msg_ai_helper_response"+(s?"_variations":"")],null,(function(e,t){if(e&&e<_.length){var a=s?t.find('input[name="trx_addons_ai_helper_response__variant"]:checked').val():t.find("textarea").text();if("process_title"==p||"process_translate"==p&&"title"==O)wp.data.dispatch("core/editor").editPost({title:trx_addons_clear_tags(a)});else if("process_excerpt"==p||"process_translate"==p&&"excerpt"==O)wp.data.dispatch("core/editor").editPost({excerpt:trx_addons_clear_tags(a)});else{"process_heading"==p&&(a="<h3>"+a+"</h3>"),a=wp.blocks.serialize(wp.blocks.rawHandler({HTML:a}));var o=wp.blocks.parse(a);if("selected"==O){var r=wp.data.select("core/block-editor").getSelectedBlockCount()>1?wp.data.select("core/block-editor").getMultiSelectedBlockClientIds():[wp.data.select("core/block-editor").getSelectedBlockClientId()];1==e?"process_heading"==p?wp.data.dispatch("core/block-editor").insertBlocks(o,wp.data.select("core/block-editor").getBlockIndex(r[0],wp.data.select("core/block-editor").getSelectedBlockClientId())):wp.data.dispatch("core/block-editor").replaceBlocks(r,o):wp.data.dispatch("core/block-editor").insertBlocks(o,wp.data.select("core/block-editor").getBlockIndex(r[r.length-1],wp.data.select("core/block-editor").getSelectedBlockClientId())+1)}else 1==e?"process_heading"==p?wp.data.dispatch("core/editor").insertBlocks(o,0):wp.data.dispatch("core/editor").resetBlocks(o):wp.data.dispatch("core/editor").insertBlocks(o)}}}),_,"wpforms")}else trx_addons_msgbox_warning(e.error||TRX_ADDONS_STORAGE.msg_ai_helper_error,TRX_ADDONS_STORAGE.msg_ai_helper_error);else trx_addons_msgbox_warning(t||TRX_ADDONS_STORAGE.msg_ai_helper_error)};return n&&0==Object.keys(n).length?(0,t.createElement)(o.PluginDocumentSettingPanel,{name:"trx-addons-ai-helper-panel",title:__("TRX Addons AI Helper"),className:"trx-addons-ai-helper-panel"},(0,t.createElement)(r.PanelRow,null,(0,t.createElement)("p",null,__("AI Text Generator is not available - token for access to the API for text generation is not specified")))):(0,t.createElement)(o.PluginDocumentSettingPanel,{name:"trx-addons-ai-helper-panel",title:__("TRX Addons AI Helper"),className:"trx-addons-ai-helper-panel"},(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.SelectControl,{label:__("Model:"),value:s,onChange:e=>{i(e)}},Object.keys(n).map((e=>"/-"==e.slice(0,2)||"\\-"==e.slice(0,2)?(0,t.createElement)("optgroup",{label:n[e],key:e}):(0,t.createElement)("option",{value:e,key:e},n[e]))))),(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.SelectControl,{label:__("AI Command:"),value:p,onChange:e=>{_(e),0===e.indexOf("write_")&&-1==["prompt","title"].indexOf(O)?(E("prompt"),R(c[e].prompt)):R("prompt"==O?c[e].prompt:"")}},Object.keys(c).map((e=>"/-"==e.slice(0,2)?(0,t.createElement)("optgroup",{label:c[e].title,key:e}):(0,t.createElement)("option",{value:e,key:e},c[e].title))))),"process_tone"==p&&(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.SelectControl,{label:__("Text tone:"),value:m,options:u,onChange:e=>h(e)})),"process_translate"==p&&(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.SelectControl,{label:__("Language:"),value:w,options:S,onChange:e=>b(e)})),(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.SelectControl,{label:__("Based on:"),value:O,options:f,onChange:e=>{E(e),R("prompt"==e?c[p].prompt:""),"prompt"==e&&k("")}})),!1,"prompt"==O&&(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.TextareaControl,{label:__("Prompt for AI:"),help:__("Write a prompt with a brief description of what you want to get in response"),value:A,onChange:e=>R(e)})),"prompt"!=O&&(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.TextareaControl,{label:__("Additional Hint for AI:"),help:__("Write a hint with additional requirements/instructions for the AI ​​response"),value:T,onChange:e=>k(e)})),(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.Button,{variant:"primary",disabled:e,isBusy:e,className:"trx_addons_ai_helper_button",onClick:()=>{e||(a(!0),async function(){var e,t=!1,a="";try{t=await l()({path:"/ai-helper/v1/get-response",method:"POST",data:{content:"content"==O?wp.data.select("core/editor").getEditedPostAttribute("content"):"title"==O?wp.data.select("core/editor").getEditedPostAttribute("title"):"excerpt"==O?wp.data.select("core/editor").getEditedPostAttribute("excerpt"):"selected"==O?(e="",window.getSelection?e=window.getSelection().toString():document.selection&&"Control"!=document.selection.type&&(e=document.selection.createRange().text),e||wp.data.select("core/block-editor").getSelectedBlock().attributes.content):"",model:s,command:p,base_on:O,prompt:A,hint:T,text_tone:m,text_language:w}})}catch(e){t=!1,a=e.message}v(t,a)}())}},(0,t.createElement)(r.Icon,{className:"trx_addons_ai_helper_button_icon",icon:e?"update":"welcome-write-blog"}),(0,t.createElement)("span",{className:"trx_addons_ai_helper_button_text"},__("Generate")))))},icon:"rest-api"})})();