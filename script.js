$(document).ready(function () {
    const bibleChapters = [
      { book: "Genesis", chapters: Array.from({length: 50}, (_, i) => i + 1), verses: Array.from({length: 50}, (_, i) => i + 1) },
      { book: "Exodus", chapters: Array.from({length: 40}, (_, i) => i + 1), verses: Array.from({length: 40}, (_, i) => i + 1) },
      { book: "Leviticus", chapters: Array.from({length: 27}, (_, i) => i + 1), verses: Array.from({length: 27}, (_, i) => i + 1) },
      { book: "Numbers", chapters: Array.from({length: 36}, (_, i) => i + 1), verses: Array.from({length: 36}, (_, i) => i + 1) },
      { book: "Deuteronomy", chapters: Array.from({length: 34}, (_, i) => i + 1), verses: Array.from({length: 34}, (_, i) => i + 1) },
      { book: "Joshua", chapters: Array.from({length: 24}, (_, i) => i + 1), verses: Array.from({length: 24}, (_, i) => i + 1) },
      { book: "Judges", chapters: Array.from({length: 21}, (_, i) => i + 1), verses: Array.from({length: 21}, (_, i) => i + 1) },
      { book: "Ruth", chapters: [1, 2, 3, 4], verses: [1, 2, 3, 4] },
      { book: "1 Samuel", chapters: Array.from({length: 31}, (_, i) => i + 1), verses: Array.from({length: 31}, (_, i) => i + 1) },
      { book: "2 Samuel", chapters: Array.from({length: 24}, (_, i) => i + 1), verses: Array.from({length: 24}, (_, i) => i + 1) },
      { book: "1 Kings", chapters: Array.from({length: 22}, (_, i) => i + 1), verses: Array.from({length: 22}, (_, i) => i + 1) },
      { book: "2 Kings", chapters: Array.from({length: 25}, (_, i) => i + 1), verses: Array.from({length: 25}, (_, i) => i + 1) },
      { book: "1 Chronicles", chapters: Array.from({length: 29}, (_, i) => i + 1), verses: Array.from({length: 29}, (_, i) => i + 1) },
      { book: "2 Chronicles", chapters: Array.from({length: 36}, (_, i) => i + 1), verses: Array.from({length: 36}, (_, i) => i + 1) },
      { book: "Ezra", chapters: Array.from({length: 10}, (_, i) => i + 1), verses: Array.from({length: 10}, (_, i) => i + 1) },
      { book: "Nehemiah", chapters: Array.from({length: 13}, (_, i) => i + 1), verses: Array.from({length: 13}, (_, i) => i + 1) },
      { book: "Esther", chapters: Array.from({length: 10}, (_, i) => i + 1), verses: Array.from({length: 10}, (_, i) => i + 1) },
      { book: "Job", chapters: Array.from({length: 42}, (_, i) => i + 1), verses: Array.from({length: 42}, (_, i) => i + 1) },
      { book: "Psalms", chapters: Array.from({length: 150}, (_, i) => i + 1), verses: Array.from({length: 150}, (_, i) => i + 1) },
      { book: "Proverbs", chapters: Array.from({length: 31}, (_, i) => i + 1), verses: Array.from({length: 31}, (_, i) => i + 1) },
      { book: "Ecclesiastes", chapters: Array.from({length: 12}, (_, i) => i + 1), verses: Array.from({length: 12}, (_, i) => i + 1) },
      { book: "Song of Solomon", chapters: Array.from({length: 8}, (_, i) => i + 1), verses: Array.from({length: 8}, (_, i) => i + 1) },
      { book: "Isaiah", chapters: Array.from({length: 66}, (_, i) => i + 1), verses: Array.from({length: 66}, (_, i) => i + 1) },
      { book: "Jeremiah", chapters: Array.from({length: 52}, (_, i) => i + 1), verses: Array.from({length: 52}, (_, i) => i + 1) },
      { book: "Lamentations", chapters: Array.from({length: 5}, (_, i) => i + 1), verses: Array.from({length: 5}, (_, i) => i + 1) },
      { book: "Ezekiel", chapters: Array.from({length: 48}, (_, i) => i + 1), verses: Array.from({length: 48}, (_, i) => i + 1) },
      { book: "Daniel", chapters: Array.from({length: 12}, (_, i) => i + 1), verses: Array.from({length: 12}, (_, i) => i + 1) },
      { book: "Hosea", chapters: Array.from({length: 14}, (_, i) => i + 1), verses: Array.from({length: 14}, (_, i) => i + 1) },
      { book: "Joel", chapters: Array.from({length: 3}, (_, i) => i + 1), verses: Array.from({length: 3}, (_, i) => i + 1) },
      { book: "Amos", chapters: Array.from({length: 9}, (_, i) => i + 1), verses: Array.from({length: 9}, (_, i) => i + 1) },
      { book: "Obadiah", chapters: [1], verses: [1] },
      { book: "Jonah", chapters: Array.from({length: 4}, (_, i) => i + 1), verses: Array.from({length: 4}, (_, i) => i + 1) },
      { book: "Micah", chapters: Array.from({length: 7}, (_, i) => i + 1), verses: Array.from({length: 7}, (_, i) => i + 1) },
      { book: "Nahum", chapters: Array.from({length: 3}, (_, i) => i + 1), verses: Array.from({length: 3}, (_, i) => i + 1) },
      { book: "Habakkuk", chapters: Array.from({length: 3}, (_, i) => i + 1), verses: Array.from({length: 3}, (_, i) => i + 1) },
      { book: "Zephaniah", chapters: Array.from({length: 3}, (_, i) => i + 1), verses: Array.from({length: 3}, (_, i) => i + 1) },
      { book: "Haggai", chapters: [1, 2], verses: [1, 2] },
      { book: "Zechariah", chapters: Array.from({length: 14}, (_, i) => i + 1), verses: Array.from({length: 14}, (_, i) => i + 1) },
      { book: "Malachi", chapters: Array.from({length: 4}, (_, i) => i + 1), verses: Array.from({length: 4}, (_, i) => i + 1) },
      { book: "Matthew", chapters: Array.from({length: 28}, (_, i) => i + 1), verses: Array.from({length: 28}, (_, i) => i + 1) },
      { book: "Mark", chapters: Array.from({length: 16}, (_, i) => i + 1), verses: Array.from({length: 16}, (_, i) => i + 1) },
      { book: "Luke", chapters: Array.from({length: 24}, (_, i) => i + 1), verses: Array.from({length: 24}, (_, i) => i + 1) },
      { book: "John", chapters: Array.from({length: 21}, (_, i) => i + 1), verses: Array.from({length: 21}, (_, i) => i + 1) },
      { book: "Acts", chapters: Array.from({length: 28}, (_, i) => i + 1), verses: Array.from({length: 28}, (_, i) => i + 1) },
      { book: "Romans", chapters: Array.from({length: 16}, (_, i) => i + 1), verses: Array.from({length: 16}, (_, i) => i + 1) },
      { book: "1 Corinthians", chapters: Array.from({length: 16}, (_, i) => i + 1), verses: Array.from({length: 16}, (_, i) => i + 1) },
      { book: "2 Corinthians", chapters: Array.from({length: 13}, (_, i) => i + 1), verses: Array.from({length: 13}, (_, i) => i + 1) },
      { book: "Galatians", chapters: Array.from({length: 6}, (_, i) => i + 1), verses: Array.from({length: 6}, (_, i) => i + 1) },
      { book: "Ephesians", chapters: Array.from({length: 6}, (_, i) => i + 1), verses: Array.from({length: 6}, (_, i) => i + 1) },
      { book: "Philippians", chapters: Array.from({length: 4}, (_, i) => i + 1), verses: Array.from({length: 4}, (_, i) => i + 1) },
      { book: "Colossians", chapters: Array.from({length: 4}, (_, i) => i + 1), verses: Array.from({length: 4}, (_, i) => i + 1) },
      { book: "1 Thessalonians", chapters: Array.from({length: 5}, (_, i) => i + 1), verses: Array.from({length: 5}, (_, i) => i + 1) },
      { book: "2 Thessalonians", chapters: Array.from({length: 3}, (_, i) => i + 1), verses: Array.from({length: 3}, (_, i) => i + 1) },
      { book: "1 Timothy", chapters: Array.from({length: 6}, (_, i) => i + 1), verses: Array.from({length: 6}, (_, i) => i + 1) },
      { book: "2 Timothy", chapters: Array.from({length: 4}, (_, i) => i + 1), verses: Array.from({length: 4}, (_, i) => i + 1) },
      { book: "Titus", chapters: Array.from({length: 3}, (_, i) => i + 1), verses: Array.from({length: 3}, (_, i) => i + 1) },
      { book: "Philemon", chapters: [1], verses: [1] },
      { book: "Hebrews", chapters: Array.from({length: 13}, (_, i) => i + 1), verses: Array.from({length: 13}, (_, i) => i + 1) },
      { book: "James", chapters: Array.from({length: 5}, (_, i) => i + 1), verses: Array.from({length: 5}, (_, i) => i + 1) },
      { book: "1 Peter", chapters: Array.from({length: 5}, (_, i) => i + 1), verses: Array.from({length: 5}, (_, i) => i + 1) },
      { book: "2 Peter", chapters: Array.from({length: 3}, (_, i) => i + 1), verses: Array.from({length: 3}, (_, i) => i + 1) },
      { book: "1 John", chapters: Array.from({length: 5}, (_, i) => i + 1), verses: Array.from({length: 5}, (_, i) => i + 1) },
      { book: "2 John", chapters: [1], verses: [1] },
      { book: "3 John", chapters: [1], verses: [1] },
      { book: "Jude", chapters: [1], verses: [1] },
      { book: "Revelation", chapters: Array.from({length: 22}, (_, i) => i + 1), verses: Array.from({length: 22}, (_, i) => i + 1) }
  ];
  
    // Populate the book dropdown
    bibleChapters.forEach((book) => {
      $("#book-select").append(
        `<option value="${book.book}">${book.book}</option>`
      );
    });
  
    // Handle book selection
    $("#book-select").change(function () {
      const selectedBook = $(this).val();
      $("#chapter-select")
        .empty()
        .append('<option value="">Select a chapter</option>');
      $("#verse-select")
        .empty()
        .append('<option value="">Select a verse</option>')
        .prop("disabled", true);
      $("#verse-display").text("");
  
      if (selectedBook) {
        const book = bibleChapters.find((b) => b.book === selectedBook);
        if (book) {
          book.chapters.forEach((chapter) => {
            $("#chapter-select").append(
              `<option value="${chapter}">${chapter}</option>`
            );
          });
          $("#chapter-select").prop("disabled", false);
        }
      } else {
        $("#chapter-select").prop("disabled", true);
      }
    });
  
    // Handle chapter selection
    $("#chapter-select").change(function () {
      const selectedBook = $("#book-select").val();
      const selectedChapter = $(this).val();
      $("#verse-select")
        .empty()
        .append('<option value="">Select a verse</option>');
      $("#verse-display").text("");
  
      if (selectedBook && selectedChapter) {
        const book = bibleChapters.find((b) => b.book === selectedBook);
        if (book) {
          const verses = Array.from(
            { length: book.chapters[selectedChapter - 1] },
            (_, i) => i + 1
          );
          verses.forEach((verse) => {
            $("#verse-select").append(
              `<option value="${verse}">${verse}</option>`
            );
          });
          $("#verse-select").prop("disabled", false);
        }
      } else {
        $("#verse-select").prop("disabled", true);
      }
    });
  
    // Handle verse selection and fetch verse data
    // $("#verse-select").change(function () {
    //   const selectedBook = $("#book-select").val().toLowerCase();
    //   const selectedChapter = $("#chapter-select").val();
    //   const selectedVerse = $(this).val();
    //   $("#verse-display").text("");
  
    //   if (selectedBook && selectedChapter && selectedVerse) {
    //     const endpoint = `https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-asv/books/${selectedBook}/chapters/${selectedChapter}/verses/${selectedVerse}.json`;
  
    //     $.ajax({
    //       url: endpoint,
    //       type: "GET",
    //       dataType: "json",
    //       success: function (data) {
    //         console.log(data.text);
    //         $("#verse-display-text").text(data.text);
    //       },
    //       error: function () {
    //         $("#verse-display-text").text("Failed to fetch verse.");
    //       },
    //     });
    //   }
    // });
    
    function fetchVerse() {
      const selectedBook = $("#book-select").val().toLowerCase();
      const selectedChapter = $("#chapter-select").val();
      const selectedVerse = $("#verse-select").val();
  
      if (selectedBook && selectedChapter && selectedVerse) {
        const endpoint = `https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-asv/books/${selectedBook}/chapters/${selectedChapter}/verses/${selectedVerse}.json`;
  
        $.ajax({
          url: endpoint,
          type: "GET",
          dataType: "json",
          success: function (data) {
            console.log(data.text);
            $("#verse-display-text").text(data.text);
          },
          error: function () {
            $("#verse-display-text").text("Failed to fetch verse.");
          },
        });
      }
    }
  
    // Handle verse selection and fetch verse data
    $("#verse-select").change(fetchVerse);
  
    // Handle Fetch button click event
    $("#fetch-button").click(fetchVerse);
  
    // You can keep the rest of the code for populating dropdowns here
  });