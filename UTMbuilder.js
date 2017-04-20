//
//
// 1. Paste this into the "script" section of a
// google sheet
// 2. setup your collumns in the order of:
// URL,utm_source,utm_medium,utm_term,utm_content,utm_campaign
// 3. in the column you want the tracking URL, use:
// =track(A1,B1,C1,D1,E1,F1)
// 4. Profit!
//
//

// combine tracking elements together, create tracking URL
function track(url,source,medium,term,content,campaign) {
  // nothing prints if URL is empty
  // queries are fored to be lowercase
  // limited to 2k char total
  // URL and Source are required, all others are not
  if (url == "" || source == "") {
    throw new Error("URL and Source are required");
  }
  if(url.indexOf('?') > -1)
  {
    var source_query = "&utm_source=";
  } else {
    var source_query = "?utm_source=";
  }
  var e_source = encodeURIComponent(source.toLowerCase());
  if (medium !== "") {
    var medium_query = "&utm_medium=";
    var e_medium = encodeURIComponent(medium.toLowerCase());
  } else {
    var medium_query = "";
    var e_medium = "";
  }
  if (term !== "") {
    var term_query = "&utm_term=";
    var e_term = encodeURIComponent(term.toLowerCase());
  } else {
    var term_query = "";
    var e_term = "";
  }
  if (content !== "") {
    var content_query = "&utm_content=";
    var e_content = encodeURIComponent(content.toLowerCase());
  } else {
    var content_query = "";
    var e_content = "";
  }
  if (campaign !== "") {
    var campaign_query = "&utm_campaign=";
    var e_campaign = encodeURIComponent(campaign.toLowerCase());
  } else {
    var campaign_query = "";
    var e_campaign = "";
  }
  var combined = url.concat(source_query,e_source,medium_query,e_medium,term_query,e_term,content_query,e_content,campaign_query,e_campaign);
  if (combined.length > 2000) {
    throw new Error("URL must not exceed 2000 characters");
  } else {
    return combined;
  }
}
