$(document).ready(function () {
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
        $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 768px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
        });

        // Elements to inject 
        var elementsToInject = document.querySelectorAll('.inject-me');
        var injectorOptions = {
            evalScripts: 'once'
        };
        // Trigger the injection 
        var injector = new SVGInjector(injectorOptions);
        if($(elementsToInject).length) {
            injector.inject(
                elementsToInject
            );
        }


        $('.grid').masonry({
            // options
            itemSelector: '.grid-item',
            columnWidth: 200
          });


    });

    new Date().getFullYear();
    document.getElementById("year").innerHTML = new Date().getFullYear();


