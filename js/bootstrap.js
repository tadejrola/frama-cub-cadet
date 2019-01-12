/*! jQuery - v0.0.1 - 2014-08-28
 *
 * Copyright (c) 2014 Jonathan Heilmann; */
(function (e) {
	if (typeof mfpInlineFunctions != "undefined") {
		e.each(mfpInlineFunctions, function (t, n) {
			n(e)
		})
	}
})(window.jQuery || window.Zepto);
/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function (a) {
	"use strict";
	var b = a.fn.jquery.split(" ")[0].split(".");
	if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
}(jQuery), + function (a) {
	"use strict";

	function b() {
		var a = document.createElement("bootstrap"),
			b = {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "oTransitionEnd otransitionend",
				transition: "transitionend"
			};
		for (var c in b)
			if (void 0 !== a.style[c]) return {
				end: b[c]
			};
		return !1
	}
	a.fn.emulateTransitionEnd = function (b) {
		var c = !1,
			d = this;
		a(this).one("bsTransitionEnd", function () {
			c = !0
		});
		var e = function () {
			c || a(d).trigger(a.support.transition.end)
		};
		return setTimeout(e, b), this
	}, a(function () {
		a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
			bindType: a.support.transition.end,
			delegateType: a.support.transition.end,
			handle: function (b) {
				return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
			}
		})
	})
}(jQuery), + function (a) {
	"use strict";

	function b(b) {
		return this.each(function () {
			var c = a(this),
				e = c.data("bs.alert");
			e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
		})
	}
	var c = '[data-dismiss="alert"]',
		d = function (b) {
			a(b).on("click", c, this.close)
		};
	d.VERSION = "3.3.6", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
		function c() {
			g.detach().trigger("closed.bs.alert").remove()
		}
		var e = a(this),
			f = e.attr("data-target");
		f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
		var g = a(f);
		b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
	};
	var e = a.fn.alert;
	a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
		return a.fn.alert = e, this
	}, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function (a) {
	"use strict";

	function b(b) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.button"),
				f = "object" == typeof b && b;
			e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
		})
	}
	var c = function (b, d) {
		this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
	};
	c.VERSION = "3.3.6", c.DEFAULTS = {
		loadingText: "loading..."
	}, c.prototype.setState = function (b) {
		var c = "disabled",
			d = this.$element,
			e = d.is("input") ? "val" : "html",
			f = d.data();
		b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
			d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
		}, this), 0)
	}, c.prototype.toggle = function () {
		var a = !0,
			b = this.$element.closest('[data-toggle="buttons"]');
		if (b.length) {
			var c = this.$element.find("input");
			"radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
		} else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
	};
	var d = a.fn.button;
	a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
		return a.fn.button = d, this
	}, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
		var d = a(c.target);
		d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault()
	}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
		a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
	})
}(jQuery), + function (a) {
	"use strict";

	function b(b) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.carousel"),
				f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
				g = "string" == typeof b ? b : f.slide;
			e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
		})
	}
	var c = function (b, c) {
		this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
	};
	c.VERSION = "3.3.6", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
		interval: 5e3,
		pause: "hover",
		wrap: !0,
		keyboard: !0
	}, c.prototype.keydown = function (a) {
		if (!/input|textarea/i.test(a.target.tagName)) {
			switch (a.which) {
				case 37:
					this.prev();
					break;
				case 39:
					this.next();
					break;
				default:
					return
			}
			a.preventDefault()
		}
	}, c.prototype.cycle = function (b) {
		return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
	}, c.prototype.getItemIndex = function (a) {
		return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
	}, c.prototype.getItemForDirection = function (a, b) {
		var c = this.getItemIndex(b),
			d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
		if (d && !this.options.wrap) return b;
		var e = "prev" == a ? -1 : 1,
			f = (c + e) % this.$items.length;
		return this.$items.eq(f)
	}, c.prototype.to = function (a) {
		var b = this,
			c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
		return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
			b.to(a)
		}) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
	}, c.prototype.pause = function (b) {
		return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
	}, c.prototype.next = function () {
		return this.sliding ? void 0 : this.slide("next")
	}, c.prototype.prev = function () {
		return this.sliding ? void 0 : this.slide("prev")
	}, c.prototype.slide = function (b, d) {
		var e = this.$element.find(".item.active"),
			f = d || this.getItemForDirection(b, e),
			g = this.interval,
			h = "next" == b ? "left" : "right",
			i = this;
		if (f.hasClass("active")) return this.sliding = !1;
		var j = f[0],
			k = a.Event("slide.bs.carousel", {
				relatedTarget: j,
				direction: h
			});
		if (this.$element.trigger(k), !k.isDefaultPrevented()) {
			if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
				this.$indicators.find(".active").removeClass("active");
				var l = a(this.$indicators.children()[this.getItemIndex(f)]);
				l && l.addClass("active")
			}
			var m = a.Event("slid.bs.carousel", {
				relatedTarget: j,
				direction: h
			});
			return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
				f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
					i.$element.trigger(m)
				}, 0)
			}).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
		}
	};
	var d = a.fn.carousel;
	a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
		return a.fn.carousel = d, this
	};
	var e = function (c) {
		var d, e = a(this),
			f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
		if (f.hasClass("carousel")) {
			var g = a.extend({}, f.data(), e.data()),
				h = e.attr("data-slide-to");
			h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
		}
	};
	a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
		a('[data-ride="carousel"]').each(function () {
			var c = a(this);
			b.call(c, c.data())
		})
	})
}(jQuery), + function (a) {
	"use strict";

	function b(b) {
		var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
		return a(d)
	}

	function c(b) {
		return this.each(function () {
			var c = a(this),
				e = c.data("bs.collapse"),
				f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
			!e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
		})
	}
	var d = function (b, c) {
		this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
	};
	d.VERSION = "3.3.6", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
		toggle: !0
	}, d.prototype.dimension = function () {
		var a = this.$element.hasClass("width");
		return a ? "width" : "height"
	}, d.prototype.show = function () {
		if (!this.transitioning && !this.$element.hasClass("in")) {
			var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
			if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
				var f = a.Event("show.bs.collapse");
				if (this.$element.trigger(f), !f.isDefaultPrevented()) {
					e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
					var g = this.dimension();
					this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
					var h = function () {
						this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
					};
					if (!a.support.transition) return h.call(this);
					var i = a.camelCase(["scroll", g].join("-"));
					this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
				}
			}
		}
	}, d.prototype.hide = function () {
		if (!this.transitioning && this.$element.hasClass("in")) {
			var b = a.Event("hide.bs.collapse");
			if (this.$element.trigger(b), !b.isDefaultPrevented()) {
				var c = this.dimension();
				this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
				var e = function () {
					this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
				};
				return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
			}
		}
	}, d.prototype.toggle = function () {
		this[this.$element.hasClass("in") ? "hide" : "show"]()
	}, d.prototype.getParent = function () {
		return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
			var e = a(d);
			this.addAriaAndCollapsedClass(b(e), e)
		}, this)).end()
	}, d.prototype.addAriaAndCollapsedClass = function (a, b) {
		var c = a.hasClass("in");
		a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
	};
	var e = a.fn.collapse;
	a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
		return a.fn.collapse = e, this
	}, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
		var e = a(this);
		e.attr("data-target") || d.preventDefault();
		var f = b(e),
			g = f.data("bs.collapse"),
			h = g ? "toggle" : e.data();
		c.call(f, h)
	})
}(jQuery), + function (a) {
	"use strict";

	function b(b) {
		var c = b.attr("data-target");
		c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
		var d = c && a(c);
		return d && d.length ? d : b.parent()
	}

	function c(c) {
		c && 3 === c.which || (a(e).remove(), a(f).each(function () {
			var d = a(this),
				e = b(d),
				f = {
					relatedTarget: this
				};
			e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))))
		}))
	}

	function d(b) {
		return this.each(function () {
			var c = a(this),
				d = c.data("bs.dropdown");
			d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
		})
	}
	var e = ".dropdown-backdrop",
		f = '[data-toggle="dropdown"]',
		g = function (b) {
			a(b).on("click.bs.dropdown", this.toggle)
		};
	g.VERSION = "3.3.6", g.prototype.toggle = function (d) {
		var e = a(this);
		if (!e.is(".disabled, :disabled")) {
			var f = b(e),
				g = f.hasClass("open");
			if (c(), !g) {
				"ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
				var h = {
					relatedTarget: this
				};
				if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
				e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
			}
			return !1
		}
	}, g.prototype.keydown = function (c) {
		if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
			var d = a(this);
			if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
				var e = b(d),
					g = e.hasClass("open");
				if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
				var h = " li:not(.disabled):visible a",
					i = e.find(".dropdown-menu" + h);
				if (i.length) {
					var j = i.index(c.target);
					38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
				}
			}
		}
	};
	var h = a.fn.dropdown;
	a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
		return a.fn.dropdown = h, this
	}, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
		a.stopPropagation()
	}).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery), + function (a) {
	"use strict";

	function b(b, d) {
		return this.each(function () {
			var e = a(this),
				f = e.data("bs.modal"),
				g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
			f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
		})
	}
	var c = function (b, c) {
		this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
			this.$element.trigger("loaded.bs.modal")
		}, this))
	};
	c.VERSION = "3.3.6", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
		backdrop: !0,
		keyboard: !0,
		show: !0
	}, c.prototype.toggle = function (a) {
		return this.isShown ? this.hide() : this.show(a)
	}, c.prototype.show = function (b) {
		var d = this,
			e = a.Event("show.bs.modal", {
				relatedTarget: b
			});
		this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
			d.$element.one("mouseup.dismiss.bs.modal", function (b) {
				a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
			})
		}), this.backdrop(function () {
			var e = a.support.transition && d.$element.hasClass("fade");
			d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
			var f = a.Event("shown.bs.modal", {
				relatedTarget: b
			});
			e ? d.$dialog.one("bsTransitionEnd", function () {
				d.$element.trigger("focus").trigger(f)
			}).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
		}))
	}, c.prototype.hide = function (b) {
		b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
	}, c.prototype.enforceFocus = function () {
		a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
			this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
		}, this))
	}, c.prototype.escape = function () {
		this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
			27 == a.which && this.hide()
		}, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
	}, c.prototype.resize = function () {
		this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
	}, c.prototype.hideModal = function () {
		var a = this;
		this.$element.hide(), this.backdrop(function () {
			a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
		})
	}, c.prototype.removeBackdrop = function () {
		this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
	}, c.prototype.backdrop = function (b) {
		var d = this,
			e = this.$element.hasClass("fade") ? "fade" : "";
		if (this.isShown && this.options.backdrop) {
			var f = a.support.transition && e;
			if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
					return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
				}, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
			f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
		} else if (!this.isShown && this.$backdrop) {
			this.$backdrop.removeClass("in");
			var g = function () {
				d.removeBackdrop(), b && b()
			};
			a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
		} else b && b()
	}, c.prototype.handleUpdate = function () {
		this.adjustDialog()
	}, c.prototype.adjustDialog = function () {
		var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
		this.$element.css({
			paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
			paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
		})
	}, c.prototype.resetAdjustments = function () {
		this.$element.css({
			paddingLeft: "",
			paddingRight: ""
		})
	}, c.prototype.checkScrollbar = function () {
		var a = window.innerWidth;
		if (!a) {
			var b = document.documentElement.getBoundingClientRect();
			a = b.right - Math.abs(b.left)
		}
		this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
	}, c.prototype.setScrollbar = function () {
		var a = parseInt(this.$body.css("padding-right") || 0, 10);
		this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
	}, c.prototype.resetScrollbar = function () {
		this.$body.css("padding-right", this.originalBodyPad)
	}, c.prototype.measureScrollbar = function () {
		var a = document.createElement("div");
		a.className = "modal-scrollbar-measure", this.$body.append(a);
		var b = a.offsetWidth - a.clientWidth;
		return this.$body[0].removeChild(a), b
	};
	var d = a.fn.modal;
	a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
		return a.fn.modal = d, this
	}, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
		var d = a(this),
			e = d.attr("href"),
			f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
			g = f.data("bs.modal") ? "toggle" : a.extend({
				remote: !/#/.test(e) && e
			}, f.data(), d.data());
		d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
			a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
				d.is(":visible") && d.trigger("focus")
			})
		}), b.call(f, g, this)
	})
}(jQuery), + function (a) {
	"use strict";

	function b(b) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.tooltip"),
				f = "object" == typeof b && b;
			(e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
		})
	}
	var c = function (a, b) {
		this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
	};
	c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
		animation: !0,
		placement: "top",
		selector: !1,
		template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		trigger: "hover focus",
		title: "",
		delay: 0,
		html: !1,
		container: !1,
		viewport: {
			selector: "body",
			padding: 0
		}
	}, c.prototype.init = function (b, c, d) {
		if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
				click: !1,
				hover: !1,
				focus: !1
			}, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
		for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
			var g = e[f];
			if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
			else if ("manual" != g) {
				var h = "hover" == g ? "mouseenter" : "focusin",
					i = "hover" == g ? "mouseleave" : "focusout";
				this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
			}
		}
		this.options.selector ? this._options = a.extend({}, this.options, {
			trigger: "manual",
			selector: ""
		}) : this.fixTitle()
	}, c.prototype.getDefaults = function () {
		return c.DEFAULTS
	}, c.prototype.getOptions = function (b) {
		return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
			show: b.delay,
			hide: b.delay
		}), b
	}, c.prototype.getDelegateOptions = function () {
		var b = {},
			c = this.getDefaults();
		return this._options && a.each(this._options, function (a, d) {
			c[a] != d && (b[a] = d)
		}), b
	}, c.prototype.enter = function (b) {
		var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
		return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function () {
			"in" == c.hoverState && c.show()
		}, c.options.delay.show)) : c.show())
	}, c.prototype.isInStateTrue = function () {
		for (var a in this.inState)
			if (this.inState[a]) return !0;
		return !1
	}, c.prototype.leave = function (b) {
		var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
		return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function () {
			"out" == c.hoverState && c.hide()
		}, c.options.delay.hide)) : c.hide())
	}, c.prototype.show = function () {
		var b = a.Event("show.bs." + this.type);
		if (this.hasContent() && this.enabled) {
			this.$element.trigger(b);
			var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
			if (b.isDefaultPrevented() || !d) return;
			var e = this,
				f = this.tip(),
				g = this.getUID(this.type);
			this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
			var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
				i = /\s?auto?\s?/i,
				j = i.test(h);
			j && (h = h.replace(i, "") || "top"), f.detach().css({
				top: 0,
				left: 0,
				display: "block"
			}).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
			var k = this.getPosition(),
				l = f[0].offsetWidth,
				m = f[0].offsetHeight;
			if (j) {
				var n = h,
					o = this.getPosition(this.$viewport);
				h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
			}
			var p = this.getCalculatedOffset(h, k, l, m);
			this.applyPlacement(p, h);
			var q = function () {
				var a = e.hoverState;
				e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
			};
			a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
		}
	}, c.prototype.applyPlacement = function (b, c) {
		var d = this.tip(),
			e = d[0].offsetWidth,
			f = d[0].offsetHeight,
			g = parseInt(d.css("margin-top"), 10),
			h = parseInt(d.css("margin-left"), 10);
		isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
			using: function (a) {
				d.css({
					top: Math.round(a.top),
					left: Math.round(a.left)
				})
			}
		}, b), 0), d.addClass("in");
		var i = d[0].offsetWidth,
			j = d[0].offsetHeight;
		"top" == c && j != f && (b.top = b.top + f - j);
		var k = this.getViewportAdjustedDelta(c, b, i, j);
		k.left ? b.left += k.left : b.top += k.top;
		var l = /top|bottom/.test(c),
			m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
			n = l ? "offsetWidth" : "offsetHeight";
		d.offset(b), this.replaceArrow(m, d[0][n], l)
	}, c.prototype.replaceArrow = function (a, b, c) {
		this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
	}, c.prototype.setContent = function () {
		var a = this.tip(),
			b = this.getTitle();
		a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
	}, c.prototype.hide = function (b) {
		function d() {
			"in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
		}
		var e = this,
			f = a(this.$tip),
			g = a.Event("hide.bs." + this.type);
		return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
	}, c.prototype.fixTitle = function () {
		var a = this.$element;
		(a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
	}, c.prototype.hasContent = function () {
		return this.getTitle()
	}, c.prototype.getPosition = function (b) {
		b = b || this.$element;
		var c = b[0],
			d = "BODY" == c.tagName,
			e = c.getBoundingClientRect();
		null == e.width && (e = a.extend({}, e, {
			width: e.right - e.left,
			height: e.bottom - e.top
		}));
		var f = d ? {
				top: 0,
				left: 0
			} : b.offset(),
			g = {
				scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
			},
			h = d ? {
				width: a(window).width(),
				height: a(window).height()
			} : null;
		return a.extend({}, e, g, h, f)
	}, c.prototype.getCalculatedOffset = function (a, b, c, d) {
		return "bottom" == a ? {
			top: b.top + b.height,
			left: b.left + b.width / 2 - c / 2
		} : "top" == a ? {
			top: b.top - d,
			left: b.left + b.width / 2 - c / 2
		} : "left" == a ? {
			top: b.top + b.height / 2 - d / 2,
			left: b.left - c
		} : {
			top: b.top + b.height / 2 - d / 2,
			left: b.left + b.width
		}
	}, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
		var e = {
			top: 0,
			left: 0
		};
		if (!this.$viewport) return e;
		var f = this.options.viewport && this.options.viewport.padding || 0,
			g = this.getPosition(this.$viewport);
		if (/right|left/.test(a)) {
			var h = b.top - f - g.scroll,
				i = b.top + f - g.scroll + d;
			h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
		} else {
			var j = b.left - f,
				k = b.left + f + c;
			j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
		}
		return e
	}, c.prototype.getTitle = function () {
		var a, b = this.$element,
			c = this.options;
		return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
	}, c.prototype.getUID = function (a) {
		do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
		return a
	}, c.prototype.tip = function () {
		if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
		return this.$tip
	}, c.prototype.arrow = function () {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
	}, c.prototype.enable = function () {
		this.enabled = !0
	}, c.prototype.disable = function () {
		this.enabled = !1
	}, c.prototype.toggleEnabled = function () {
		this.enabled = !this.enabled
	}, c.prototype.toggle = function (b) {
		var c = this;
		b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
	}, c.prototype.destroy = function () {
		var a = this;
		clearTimeout(this.timeout), this.hide(function () {
			a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null
		})
	};
	var d = a.fn.tooltip;
	a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
		return a.fn.tooltip = d, this
	}
}(jQuery), + function (a) {
	"use strict";

	function b(b) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.popover"),
				f = "object" == typeof b && b;
			(e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
		})
	}
	var c = function (a, b) {
		this.init("popover", a, b)
	};
	if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
	c.VERSION = "3.3.6", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
		placement: "right",
		trigger: "click",
		content: "",
		template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	}), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
		return c.DEFAULTS
	}, c.prototype.setContent = function () {
		var a = this.tip(),
			b = this.getTitle(),
			c = this.getContent();
		a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
	}, c.prototype.hasContent = function () {
		return this.getTitle() || this.getContent()
	}, c.prototype.getContent = function () {
		var a = this.$element,
			b = this.options;
		return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
	}, c.prototype.arrow = function () {
		return this.$arrow = this.$arrow || this.tip().find(".arrow")
	};
	var d = a.fn.popover;
	a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
		return a.fn.popover = d, this
	}
}(jQuery), + function (a) {
	"use strict";

	function b(c, d) {
		this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
	}

	function c(c) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.scrollspy"),
				f = "object" == typeof c && c;
			e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
		})
	}
	b.VERSION = "3.3.6", b.DEFAULTS = {
		offset: 10
	}, b.prototype.getScrollHeight = function () {
		return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
	}, b.prototype.refresh = function () {
		var b = this,
			c = "offset",
			d = 0;
		this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
			var b = a(this),
				e = b.data("target") || b.attr("href"),
				f = /^#./.test(e) && a(e);
			return f && f.length && f.is(":visible") && [
				[f[c]().top + d, e]
			] || null
		}).sort(function (a, b) {
			return a[0] - b[0]
		}).each(function () {
			b.offsets.push(this[0]), b.targets.push(this[1])
		})
	}, b.prototype.process = function () {
		var a, b = this.$scrollElement.scrollTop() + this.options.offset,
			c = this.getScrollHeight(),
			d = this.options.offset + c - this.$scrollElement.height(),
			e = this.offsets,
			f = this.targets,
			g = this.activeTarget;
		if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
		if (g && b < e[0]) return this.activeTarget = null, this.clear();
		for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
	}, b.prototype.activate = function (b) {
		this.activeTarget = b, this.clear();
		var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
			d = a(c).parents("li").addClass("active");
		d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
	}, b.prototype.clear = function () {
		a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
	};
	var d = a.fn.scrollspy;
	a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
		return a.fn.scrollspy = d, this
	}, a(window).on("load.bs.scrollspy.data-api", function () {
		a('[data-spy="scroll"]').each(function () {
			var b = a(this);
			c.call(b, b.data())
		})
	})
}(jQuery), + function (a) {
	"use strict";

	function b(b) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.tab");
			e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
		})
	}
	var c = function (b) {
		this.element = a(b)
	};
	c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
		var b = this.element,
			c = b.closest("ul:not(.dropdown-menu)"),
			d = b.data("target");
		if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
			var e = c.find(".active:last a"),
				f = a.Event("hide.bs.tab", {
					relatedTarget: b[0]
				}),
				g = a.Event("show.bs.tab", {
					relatedTarget: e[0]
				});
			if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
				var h = a(d);
				this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
					e.trigger({
						type: "hidden.bs.tab",
						relatedTarget: b[0]
					}), b.trigger({
						type: "shown.bs.tab",
						relatedTarget: e[0]
					})
				})
			}
		}
	}, c.prototype.activate = function (b, d, e) {
		function f() {
			g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
		}
		var g = d.find("> .active"),
			h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
		g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
	};
	var d = a.fn.tab;
	a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
		return a.fn.tab = d, this
	};
	var e = function (c) {
		c.preventDefault(), b.call(a(this), "show")
	};
	a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), + function (a) {
	"use strict";

	function b(b) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.affix"),
				f = "object" == typeof b && b;
			e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
		})
	}
	var c = function (b, d) {
		this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
	};
	c.VERSION = "3.3.6", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
		offset: 0,
		target: window
	}, c.prototype.getState = function (a, b, c, d) {
		var e = this.$target.scrollTop(),
			f = this.$element.offset(),
			g = this.$target.height();
		if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
		if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
		var h = null == this.affixed,
			i = h ? e : f.top,
			j = h ? g : b;
		return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1
	}, c.prototype.getPinnedOffset = function () {
		if (this.pinnedOffset) return this.pinnedOffset;
		this.$element.removeClass(c.RESET).addClass("affix");
		var a = this.$target.scrollTop(),
			b = this.$element.offset();
		return this.pinnedOffset = b.top - a
	}, c.prototype.checkPositionWithEventLoop = function () {
		setTimeout(a.proxy(this.checkPosition, this), 1)
	}, c.prototype.checkPosition = function () {
		if (this.$element.is(":visible")) {
			var b = this.$element.height(),
				d = this.options.offset,
				e = d.top,
				f = d.bottom,
				g = Math.max(a(document).height(), a(document.body).height());
			"object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
			var h = this.getState(g, b, e, f);
			if (this.affixed != h) {
				null != this.unpin && this.$element.css("top", "");
				var i = "affix" + (h ? "-" + h : ""),
					j = a.Event(i + ".bs.affix");
				if (this.$element.trigger(j), j.isDefaultPrevented()) return;
				this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
			}
			"bottom" == h && this.$element.offset({
				top: g - b - f
			})
		}
	};
	var d = a.fn.affix;
	a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
		return a.fn.affix = d, this
	}, a(window).on("load", function () {
		a('[data-spy="affix"]').each(function () {
			var c = a(this),
				d = c.data();
			d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
		})
	})
}(jQuery);
/* ***********************************************************
 ******************** CODETABS SCRIPT **********************
 *********************************************************** */

! function (e) {
	"use strict";
	window.csPLUGIN || (window.csPLUGIN = {}), window.csVAR || (window.csVAR = {
		codeName: "codetabs",
		codeData: "tabs",
		codeClass: "ct",
		namespace: "ct-"
	}), e[csVAR.codeName] = function (t, a) {
		var i, n, s, r, o, l, d, c, u, p, f, h, g, v, w, C, y, x, b = t,
			I = e(window),
			$ = e(document),
			N = {},
			T = {},
			L = {},
			k = {},
			R = {},
			A = {},
			D = Math,
			S = void 0,
			P = D.ceil(1e9 * D.random()),
			E = "<div></div>",
			M = e.extend(!0, {}, a),
			O = {
				cs: N,
				o: a,
				oo: M,
				va: T,
				is: R,
				ti: A,
				ds: L
			},
			B = csVAR.num;
		B = B == S ? 0 : B + 1, T.codeID = csVAR.num = B, csVAR["one" + B] = O;
		var F = {
				check: function () {
					N.ev.trigger("init"), X.setupFirst(), X.browser(), X.cssName(), H.get(), it.prop(), U.check() ? F.pre() : b.remove()
				},
				pre: function () {
					b.children().length && (J.get(), R.show ? (!!a.showFrom && J.check(), R.awake ? F.ready() : J.resizeON()) : b.remove())
				},
				ready: function () {
					V.structure(), H.code(), R.pag && V.pag(), R.nav && V.nav(), a.isCap && V.cap(), !T.$playpause && a.slideshow.isPlayPause && a.isSlideshow && V.play(), mt && ct.render(), H.slide(), V.other(), H.deepLinkCookie(), G.way(), G.next(T.$s.eq(N.idCur))
				},
				load: function () {
					R.initLoaded = 1, b.addClass(a.ns + "ready").removeClass(a.ns + "init"), R.pag && !R.pagList && j.sizeItem(), W.general(), 0 == N.idCur && N.ev.trigger("start"), "dash" == a.layout ? X.toggleDash() : X.toggle(), R.nav && K.nav(), R.pag && K.pag(), K.resize(), K.swipe(), K.click(), K.keyboard(), K.mousewheel(), pt && rt.events(), a.isSlideshow && gt && dt.init(), H.initEnd()
				}
			},
			X = {
				setupFirst: function () {
					T.codekey = P, T.$cs = b, null == a.ns && (a.ns = csVAR.namespace), A.layer = [], T.nVideoOpen = T.nMapOpen = 0, R.click = 1, T.fxLast = T.fxCur = "none", T.classAdd = []
				},
				browser: function () {
					var e = navigator.userAgent;
					R.ie = !1 || document.documentMode, R.safari = /Constructor/i.test(Object.prototype.toString.call(window.HTMLElement)), R.opera = !!window.opera || /\sOPR\//i.test(e), R.chrome = !!window.chrome && !R.opera, R.firefox = window.InstallTrigger !== S, R.ie11 = !(!R.ie || new Function("/*@cc_on return @_jscript_version; @*/")()), R.ie7 = !(!R.ie || !/MSIE\s7\./i.test(e));
					var t = ["ie", "safari", "opera", "chrome", "firefox"];
					for (x = t.length; x >= 0; x--)
						if (R[t[x]]) {
							R.browser = t[x];
							break
						}
					R.e = "object" == typeof console, R.canvas2d = function () {
						var e = document.createElement("canvas");
						return !(!e.getContext || !e.getContext("2d"))
					}(), R.msGesture = !!(window.navigator && window.navigator.msPointerEnabled && window.MSGesture), R.evTouch = !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch), R.evPointer = !!window.PointerEvent, R.evMSPointer = !!window.MSPointerEvent, R.touchSupport = R.evTouch || R.evPointer || R.evMSPointer, R.mobile = R.touchSupport && /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera|Windows\sPhone|Chrome|PSP|Dolphin|Silk/i.test(e), R.androidNative = R.mobile && /Mozilla\/5\.0/i.test(e) && /Android/i.test(e) && /AppleWebKit/i.test(e) && !/Chrome/i.test(e) && !/Android\s+4\.4/i.test(e);
					var a = ".code" + P,
						i = ["", "", ""];
					R.evTouch ? i = ["touchstart", "touchmove", "touchend"] : R.evPointer ? i = ["pointerdown", "pointermove", "pointerup"] : R.evMSPointer && (i = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), T.ev = {
						click: "click" + a,
						drag: "dragstart" + a + " selectstart" + a,
						resize: "resize" + a,
						scroll: "scroll" + a,
						key: "keyup" + a,
						wheel: "mousewheel" + a,
						hash: "hashchange" + a,
						touch: {
							start: i[0] + a,
							move: i[1] + a,
							end: i[2] + a,
							type: "touch"
						},
						mouse: {
							start: "mousedown" + a,
							move: "mousemove" + a,
							end: "mouseup" + a,
							type: "mouse"
						}
					}
				},
				cssName: function () {
					var e = function () {
						var e, t = document.createElement("p"),
							a = {
								webkitTransform: "-webkit-transform",
								MozTransform: "-moz-transform",
								transform: "transform"
							};
						document.body.insertBefore(t, null);
						for (var i in a) t.style[i] !== S && (t.style[i] = "translate3d(1px,1px,1px)", e = window.getComputedStyle(t).getPropertyValue(a[i]));
						return document.body.removeChild(t), e !== S && e.length > 0 && "none" !== e
					};
					csVAR.isTf3D == S && (csVAR.isTf3D = e());
					var t = function (e, t) {
							var a = document.createElement("p").style,
								i = ["Webkit", "Moz", "ms", "O"],
								n = ["-webkit-", "-moz-", "-ms-", "-o-"];
							if ("" === a[e]) return "is" == t ? 1 : "pre" == t ? "" : e;
							for (e = e.charAt(0).toUpperCase() + e.slice(1), x = i.length; x--;)
								if ("" === a[i[x] + e]) return "is" == t ? 1 : "pre" == t ? n[x] : i[x] + e;
							return 0
						},
						a = "transform",
						i = "transition";
					if (R.ts = t(i, "is"), R.ts) {
						var n = T.prefix = t(a, "pre"),
							s = "-timing-function";
						g = T.cssTf = n + a, v = t(i, "pre") + i, T.cssD = v + "-duration", w = v + s, C = n + "animation-duration", y = n + "animation" + s
					}
					var r = "translate3d(",
						o = csVAR.isTf3D;
					T.tl0 = o ? r : "translate(", T.tl1 = o ? ",0)" : ")", T.tlx0 = o ? r : "translateX(", T.tlx1 = o ? ",0,0)" : ")", T.tly0 = o ? r + "0," : "translateY(", T.tly1 = o ? ",0)" : ")"
				},
				easeName: function (t) {
					if ("linear" == t) return "linear";
					if (R.ts) {
						if ("swing" == t) return "ease";
						var a;
						switch (t = t.replace("ease", "")) {
							case "InSine":
								a = ".47,0,.745,.715";
								break;
							case "OutSine":
								a = ".39,.575,.565,1";
								break;
							case "InOutSine":
								a = ".445,.05,.55,.95";
								break;
							case "InQuad":
								a = ".55,.085,.68,.53";
								break;
							case "OutQuad":
								a = ".25,.46,.45,.94";
								break;
							case "InOutQuad":
								a = ".455,.03,.515,.955";
								break;
							case "InCubic":
								a = ".55,.055,.675,.19";
								break;
							case "OutCubic":
								a = ".215,.61,.355,1";
								break;
							case "InOutCubic":
								a = ".645,.045,.355,1";
								break;
							case "InQuart":
								a = ".895,.03,.685,.22";
								break;
							case "OutQuart":
								a = ".165,.84,.44,1";
								break;
							case "InOutQuart":
								a = ".77,0,.175,1";
								break;
							case "InQuint":
								a = ".755,.05,.855,.06";
								break;
							case "OutQuint":
								a = ".23,1,.32,1";
								break;
							case "InOutQuint":
								a = ".86,0,.07,1";
								break;
							case "InExpo":
								a = ".95,.05,.795,.035";
								break;
							case "OutExpo":
								a = ".19,1,.22,1";
								break;
							case "InOutExpo":
								a = "1,0,0,1";
								break;
							case "InCirc":
								a = ".6,.04,.98,.335";
								break;
							case "OutCirc":
								a = ".075,.82,.165,1";
								break;
							case "InOutCirc":
								a = ".785,.135,.15,.86";
								break;
							case "InBack":
								a = ".6,-.28,.735,.045";
								break;
							case "OutBack":
								a = ".175,.885,.32,1.275";
								break;
							case "InOutBack":
								a = ".68,-.55,.265,1.55";
								break;
							case "InElastic":
							case "OutElastic":
							case "InOutElastic":
							case "InBounce":
							case "OutBounce":
							case "InOutBounce":
							default:
								a = ".25,.1,.25,1"
						}
						return "cubic-bezier(" + a + ")"
					}
					return e.easing && e.easing[t] ? t : "swing"
				},
				toggle: function () {
					var e = N.idCur,
						t = N.idLast,
						i = T.$s.eq(e),
						n = T.$s.eq(t),
						s = a.ns + a.current;
					if (n.removeClass(s), i.addClass(s), t != S && N.ev.trigger("deselectID", t), N.ev.trigger("selectID", e), R.pag && (T.$pagItem.eq(t).removeClass(s), T.$pagItem.eq(e).addClass(s)), R.nav) {
						var l = a.ns + a.inActived;
						a.isLoop ? (r.hasClass(l) && r.removeClass(l), o.hasClass(l) && o.removeClass(l)) : (0 == e && r.addClass(l), e == u - 1 && o.addClass(l), 0 != e && r.hasClass(l) && r.removeClass(l), e != u - 1 && o.hasClass(l) && o.removeClass(l))
					}
					a.isCap && Z.toggle(i, n), G.add(i), "auto" == a.height && _.swapHNative(), nt.toggle(), t != S && (a.isDeeplinking && pt && rt.write(), a.isCookie && ft && ot.write())
				},
				toggleDash: function () {
					if (R.pag) {
						for (var e = L.pagNum - 1, t = a.ns + a.current; L.nEnd < L.pagID[e];) e--;
						var i = T.$pagItem.eq(L.pagID[e]);
						T.$pagItem.not(i).removeClass(t), i.addClass(t)
					}
					if (R.nav && !a.isLoop) {
						var n = a.ns + a.inActived;
						0 == L.nBegin && r.addClass(n), L.nEnd == u - 1 && o.addClass(n), 0 != L.nBegin && r.hasClass(n) && r.removeClass(n), L.nEnd != u - 1 && o.hasClass(n) && o.removeClass(n)
					}
				},
				toggleFree: function () {
					var e = a.fName + "-out",
						t = a.fName + "-in",
						i = T.$s.eq(N.idCur),
						n = T.$s.eq(N.idLast);
					i.hasClass(e) && i.removeClass(e), i.hasClass(t) || i.addClass(t), n.hasClass(e) || n.addClass(e), n.hasClass(t) && n.removeClass(t)
				},
				toggleClass: function (e, t) {
					if ("grab" != e || !R.mobile) {
						var i = a.className[e],
							n = a.ns + i[0],
							s = a.ns + i[1],
							r = t ? n : s,
							o = t ? s : n,
							l = X.sSwap().viewport; - 1 == t ? (l.hasClass(n) && l.removeClass(n), l.hasClass(s) && l.removeClass(s)) : (!l.hasClass(r) && l.addClass(r), l.hasClass(o) && l.removeClass(o))
					}
				},
				valueX: function (e) {
					var t = e.substr(7, e.length - 8).split(", ");
					return parseInt(t[4])
				},
				valueName: function (e, t, a, i, n) {
					var s, r, o = "#[0-9a-f]{3}([0-9a-f]{3})?",
						l = "(\\s*(1|0?\\.?\\d*))?\\s*",
						d = "(rgba|rgb)\\(\\s*((\\d{1,2}|1\\d+\\d|2([0-4]\\d|5[0-5]))\\s*,?){3}" + l + "\\)",
						c = "(hsla|hsl)\\(\\s*(\\d{1,2}|[1-2]\\d{2}|3[0-5]\\d)\\s*,(\\s*(\\d{1,2}|100)\\%\\s*,?){2}" + l + "\\)",
						u = "((\"|').*(\"|')\\-?){1,3}",
						p = "(\\u005B.*\\u005D\\-?){1,3}",
						f = "(\\u007B.*\\u007D\\-?){1,3}",
						h = "((\\d*\\.?\\d+)|\\w*)(\\-+((\\d*\\.?\\d+)|\\w*)){0,3}",
						g = t + "\\-+(" + o + "|" + d + "|" + c + "|" + f + "|" + p + "|" + u + "|" + h + ")",
						m = /^(\u0022|\u0027).*(\u0022|\u0027)$/g,
						v = /^\u005B.*\u005D$/g,
						w = /^\u007B.*\u007D$/g,
						C = "csStoreStr",
						y = function (e) {
							if (e = e.replace(t + "-", ""), "object" == typeof i) {
								if (-1 != i.indexOf(e)) return e;
								var n = "[ " + csVAR.codeName + ": no value name '" + e + "' ]";
								return R.e && console.log(n), a
							}
							return X.pFloat(e)
						},
						b = function (t) {
							if (/\w+\-+\w+/g.test(t)) {
								var a = e.match(/\-+\d*\.?\d*/g);
								if ("-" != a[0] && "-" != a[1])
									for (var i = a.length - 1; i >= 0; i--) a[i] = a[i].replace(/^\-/g, ""), a[i] = parseFloat(a[i]);
								else {
									a = e.match(/\-+\w+/g);
									for (var i = a.length - 1; i >= 0; i--) a[i] = a[i].replace(/^\-/g, ""), a[i] = X.pFloat(a[i])
								}
								t = a
							}
							return X.pFloat(t)
						},
						I = function (e) {
							return w.test(e) ? e = N(e) : v.test(e) ? e = T(e) : m.test(e) && (e = L(e)), e
						},
						$ = function (e) {
							for (var t = [], a = 1, i = e.indexOf("'"); - 1 != i;) {
								if (a) e = e.replaceAt("«", i), a = 0;
								else {
									e = e.replaceAt("»", i), a = 1;
									var n = e.indexOf("«"),
										s = e.indexOf("»"),
										r = e.substr(n + 1, s - n - 1);
									t.push(r), e = e.replaceAt(C, n, s - n + 1)
								}
								i = e.indexOf("'")
							}
							return {
								array: t,
								value: e
							}
						},
						N = function (e) {
							e = e.substr(0, e.indexOf("}")).replace(/^\u007B/g, "");
							for (var t = $(e), a = t.value.replace(/\s+/g, "").split(","), i = {}, n = 0, s = a.length; s > n; n++) {
								var r = a[n].split(":");
								1 == r.length && (r[1] = null), r[0] == C && (r[0] = t.array.shift()), r[1] == C && (r[1] = t.array.shift()), i[r[0]] = X.pFloat(r[1])
							}
							return i
						},
						T = function (e) {
							e = e.substr(0, e.indexOf("]")).replace(/^\u005B/g, "");
							for (var t = $(e), a = t.value.replace(/\s+/g, "").split(","), i = [], n = 0, s = a.length; s > n; n++) a[n] == C && (a[n] = t.array.shift()), a[n] = X.pFloat(a[n]), i.push(a[n]);
							return i
						},
						L = function (e) {
							e = e.replace(/(^\u0027|\u0027$)/g, "");
							var t = e.split(/\u0027\-\u0027/g);
							return 1 == t.length && (t = t[0]), t
						};
					if (s = new RegExp(g, "g"), r = e.match(s), null != r) {
						var k = r.length,
							A = [];
						for (x = 0; k > x; x++) A[x] = y(r[x]), "" == A[x] && a != S && (A[x] = a), A[x] = X.pFloat(A[x]), n && (A[x] = b(A[x]));
						return 1 == k && (A = A[0]), A = I(A)
					}
					return a != S ? a : !1
				},
				valueMax: function (e, t, a) {
					var i, n = 0;
					for (x = e.length - 1; x >= 0; x--) i = a ? e.eq(x)[t](a) : e.eq(x)[t](), i = X.pInt(i), i > n && (n = i);
					return n
				},
				proto: {
					arrayIndex: function () {
						Array.prototype.indexOf = function (e) {
							for (var t = this.length >>> 0, a = 0; t > a; a++)
								if (a in this && this[a] === e) return a;
							return -1
						}
					},
					replaceAt: function () {
						String.prototype.replaceAt = function (e, t, a) {
							return a == S && (a = 1), this.substr(0, t) + e + this.substr(t + a)
						}
					},
					ajax: function () {
						if (!e.support.cors && e.ajaxTransport && window.XDomainRequest) {
							var t = new RegExp("^" + location.protocol, "i");
							e.ajaxTransport("* text html xml json", function (a, i) {
								if (a.crossDomain && a.async && /^get|post$/i.test(a.type) && /^https?:\/\//i.test(a.url) && t.test(a.url)) {
									var n = null,
										s = (i.dataType || "").toLowerCase();
									return window.isXDomainRequest = 1, {
										send: function (t, r) {
											n = new XDomainRequest, /^\d+$/.test(i.timeout) && (n.timeout = i.timeout), n.ontimeout = function () {
												r(500, "timeout")
											}, n.onload = function () {
												var t = "Content-Length: " + n.responseText.length + "\r\nContent-Type: " + n.contentType,
													a = {
														code: 200,
														message: "success"
													},
													i = {
														text: n.responseText
													};
												try {
													if ("html" === s || /text\/html/i.test(n.contentType)) i.html = n.responseText;
													else if ("json" === s || "text" !== s && /\/json/i.test(n.contentType)) try {
														i.json = e.parseJSON(n.responseText)
													} catch (o) {
														a.code = 500, a.message = "parseerror"
													} else if ("xml" === s || "text" !== s && /\/xml/i.test(n.contentType)) {
														var l = new ActiveXObject("Microsoft.XMLDOM");
														l.async = !1;
														try {
															l.loadXML(n.responseText)
														} catch (o) {
															l = S
														}
														if (!l || !l.documentElement || l.getElementsByTagName("parsererror").length) throw a.code = 500, a.message = "parseerror", "Invalid XML: " + n.responseText;
														i.xml = l
													}
												} catch (d) {
													throw d
												} finally {
													r(a.code, a.message, i, t)
												}
											}, n.onprogress = function () {}, n.onerror = function () {
												r(500, "error", {
													text: n.responseText
												})
											};
											var o = "";
											i.data && (o = "string" === e.type(i.data) ? i.data : e.param(i.data)), n.open(a.type, a.url), n.send(o)
										},
										abort: function () {
											n && n.abort()
										}
									}
								}
							})
						}
					}
				},
				scroll: {
					setup: function () {
						if (a.slideshow.isRunInto) {
							R.into = 0, X.scroll.check();
							var e = 200;
							I.off(T.ev.scroll), I.on(T.ev.scroll, function () {
								X.tc(A.scroll), A.scroll = setTimeout(function () {
									!R.pauseActive && X.scroll.check()
								}, e)
							})
						} else R.into = 1, gt && dt.go()
					},
					check: function (e) {
						X.scroll.position();
						var t = T.topW <= T.topCS + 100 && T.botW >= T.botCS - 100 || p >= T.hWin && T.botW - 50 >= T.topCS && T.topW - 50 <= T.botCS;
						t ? R.into || (R.into = 1, !e && gt && dt.go()) : R.into && (R.into = 0, !e && gt && dt.go())
					},
					position: function () {
						T.topW = I.scrollTop(), T.botW = T.hWin + T.topW, T.topCS = b.offset().top, T.botCS = T.topCS + p
					}
				},
				a: function (e) {
					return D.abs(e)
				},
				r: function (e) {
					return D.round(e)
				},
				c: function (e) {
					return D.ceil(e)
				},
				ra: function () {
					return D.random()
				},
				rm: function (e, t) {
					return X.ra() * (t - e) + e
				},
				raExcept: function (e, t, a) {
					var i;
					if (a == e) i = X.rm(e + 1, t);
					else if (a == t) i = X.rm(e, t - 1);
					else {
						var n = e,
							s = a - 1,
							r = a + 1,
							o = t;
						i = X.ra() >= .5 ? n == s ? n : X.ra(n, s) : r == o ? o : X.ra(r, o)
					}
					return X.r(i)
				},
				cssD1: function () {
					T.cssD1[T.cssD] = T.speed[N.idCur] + "ms"
				},
				tl: function (e, t, a) {
					var a = a ? a : "px";
					return T.tl0 + e + a + ", " + t + a + T.tl1
				},
				tlx: function (e, t) {
					var t = t ? t : "px";
					return R.ts ? T.tlx0 + e + t + T.tlx1 : e + t
				},
				tly: function (e, t) {
					var t = t ? t : "px";
					return R.ts ? T.tly0 + e + t + T.tly1 : e + t
				},
				tsAdd: function (e, t, a) {
					var i = {};
					a || (a = T.ease), i[v] = g + " " + t + "ms " + a, e.css(i)
				},
				tsRemove: function (e) {
					var t = {};
					t[v] = "none", e.css(t), setTimeout(function () {
						t[v] = "", e.css(t)
					}, 0)
				},
				tfRemove: function (e) {
					var t = {};
					t[g] = "", e.css(t)
				},
				ts: function (e, t, a, i) {
					a = a ? " " + a : "", i = i ? " " + i + "ms" : "";
					var n = {};
					return n[v] = e + " " + t + "ms" + a + i, n
				},
				pFloat: function (e) {
					if (/^\-?\d*\.?\d+$/g.test(e)) {
						var t = parseFloat(e);
						if (9007199254740992 > t) return t
					} else /(^false$)|(^off$)/g.test(e) && (e = !1);
					return e
				},
				pInt: function (e) {
					return /^\-?\d+/g.test(e) ? parseInt(e) : 0
				},
				shift: function (e, t) {
					t ? e.shift() : e.pop()
				},
				push: function (e, t, a) {
					a ? e.push(t) : e.unshift(t)
				},
				sSwap: function () {
					var e = i.is(T.swipeCur) ? T.can : T.pag;
					return e
				},
				tc: function (e) {
					return clearTimeout(e)
				}
			},
			H = {
				get: function () {
					!Array.prototype.indexOf && X.proto.arrayIndex(), !String.prototype.replaceAt && X.proto.replaceAt();
					var t = {
							layout: ["line", "dot", "dash", "free"],
							view: ["basic", "coverflow", "scale", "mask"],
							height: ["auto", "fixed"],
							imgWidth: ["none", "autofit", "smallfit", "largefit"],
							imgHeight: ["none", "autofit", "smallfit", "largefit"],
							img: ["autofit", "autofill", "smallfit", "largefit", "smallfill", "largefill"],
							timer: ["none", "bar", "arc", "number"],
							dirs: ["hor", "ver"]
						},
						i = {};
					H.split(i, b.attr("data-" + csVAR.codeData), t), a = e.extend(!0, a, i)
				},
				split: function (e, t, a, i) {
					if (t != S && "" != t) {
						for (var n = t.replace(/\s*\n+\s*/g, " "), s = t.replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "").split(" "), r = 0, o = s.length; o > r; r++) {
							var l = s[r].match(/^\w*/g)[0],
								d = s[r].indexOf("-"),
								c = s[r].replace(l + "-", "");
							if (-1 != d && "" != c) {
								var u = a[l],
									p = i ? s[r] : n;
								"is" == l.substr(0, 2) ? -1 !== "ontrue1".indexOf(c) ? e[l] = 1 : -1 !== "offalse0".indexOf(c) && (e[l] = 0) : (u = u ? u : 0, e[l] = X.valueName(p, l, e[l], u, i))
							}
						}
						i || (e.strData = n)
					}
				},
				chain3: function (e, t) {
					"number" == typeof e ? e = [e + "-0-100000"] : "string" == typeof e && (e = [e]);
					var a = {
							num: e.length
						},
						i = 0,
						n = t ? t : "value";
					for (x = a.num - 1; x >= 0; x--) {
						"number" == typeof e[x] && (e[x] += "-0-100000");
						var s = e[x].split("-");
						a[x] = {
							from: parseInt(s[1]),
							to: parseInt(s[2])
						}, a[x][n] = parseFloat(s[0]), i = i < parseInt(s[2]) ? s[2] : i
					}
					return a.wMax = parseInt(i), a
				},
				chain4: function (e) {
					"number" == typeof e ? e = [e + "-" + e + "-0-100000"] : "string" == typeof e && (e = [e]);
					var t = {
							num: e.length
						},
						a = 0;
					for (x = t.num - 1; x >= 0; x--) {
						"number" == typeof e[x] && (e[x] += "-" + e[x] + "-0-100000");
						var i = e[x].split("-");
						2 == i.length ? (i[2] = 0, i[3] = 1e5) : 3 == i.length && i.unshift(i[0]), t[x] = {
							left: parseInt(i[0]),
							right: parseInt(i[1]),
							from: parseInt(i[2]),
							to: parseInt(i[3])
						}, a = a < parseInt(i[3]) ? i[3] : a
					}
					return t.wMax = parseInt(a), t
				},
				setupBegin: function () {
					if (!R.setupInit) {
						a.height0 = a.height, p = T.hCode = 0, T.swipeCur = i, T.can = {
							viewport: n
						}, T.pag = {}, R.swipeLimit = 0;
						var e = " " + a.ns,
							t = "";
						"firefox" == R.browser && (t += e + "firefox"), R.ie7 && (t += e + "ie7"), R.mobile && (t += e + "mobile"), R.androidNative && (t += e + "androidNative"), b.addClass(t)
					}
				},
				swipeEvent: function () {
					if (R.setupInit || (R.move = 0, R.swipeTypeCur = null), !a.isSwipe || R.mobile && !a.swipe.isMobile) R.swipePag = R.swipeBody = 0;
					else {
						R.swipePag = 1;
						var e = a.swipe;
						R.swipeBody = R.mobile && e.isBodyOnMobile && !e.isBody ? 1 : !!e.isBody
					}
				},
				deepLinkCookie: function () {
					a.isDeeplinking ? pt && rt.read() : a.isCookie && ft && ot.read()
				},
				idNum: function () {
					var e = a.idBegin;
					"begin" == e ? e = 0 : "center" == e ? e = ~~(u / 2 - .5) : "centerRight" == e ? e = ~~(u / 2) : "end" == e ? e = u - 1 : 0 >= e ? e = 0 : e >= u && (e = u - 1), N.idCur || (N.idCur = a.idBegin = e), R.nav = a.isNav, R.pag = a.isPag, R.center = a.isCenter, 1 == u && (R.nav = R.center = 0, "tab" != a.pag.type && (R.pag = 0)), 2 == u && "line" == a.layout && (R.center = 0)
				},
				center: function () {
					if (R.cenLoop = R.center && a.isLoop, R.cenLoop) {
						T.center = {};
						var t = T.center;
						t.isNum = X.c(u / 2) > u / 2 ? "odd" : "even", q.centerIdMap(), !!T.sClone && T.sClone.remove(), T.sClone = e("");
						var i = ~~((u - 1) / 2),
							n = "odd" == t.isNum ? i : i + 1;
						t.n = {
							left: i,
							right: n
						}
					} else T.center = null, a.isLoop = 0
				},
				slideshow: function () {
					var e = a.slideshow;
					R.timer = !(!a.isSlideshow || !e.isTimer), T.timer = "arc" != e.timer || R.canvas2d ? e.timer : "bar", R.autoRun = !(e.isPlayPause && !e.isAutoRun), R.pauseActive = !R.autoRun
				},
				transform: function () {
					T.cssD0 = {}, T.cssD1 = {}, T.cssD0[T.cssD] = "", T.xTimer = 100, "free" != a.layout && (T.ease = X.easeName(a.easeTouch), R.ease = R.easeLast = "touch")
				},
				layout: function () {
					var e = a.layout;
					"line" == e && (a.fx || a.fxIn || a.fxOne) ? a.layout = "dot" : "free" != e || R.ts || (a.layout = a.layoutFall), "line" == a.fx && (a.layout = "line"), "dash" == e ? (R.thumb = 0, L.nBegin = 0, L.nEnd = 0, L.pMax = 0, R.setupInit || (L.height = []), a.isLoop = 0) : (a.stepNav = 1, a.stepPlay = 1)
				},
				fullscreen: function () {
					a.isFullscreen && (a.height = "fixed", null != a.offsetBy && ("string" == typeof a.offsetBy ? T.offsetBy = {
						top: a.offsetBy,
						bottom: null
					} : "object" == typeof a.offsetBy && (T.offsetBy = {
						top: a.offsetBy[0],
						bottom: a.offsetBy[1]
					})))
				},
				res: function () {
					var e = a.responsive;
					if (e) {
						if ("number" == typeof e) T.wRes = e, T.hRes = 0;
						else if ("string" == typeof e) {
							var t = e.split("-");
							T.wRes = parseInt(t[0]), T.hRes = parseInt(t[1]), T.hRes && (a.height = "fixed")
						}
						a.isFullscreen && (0 == T.hRes && (T.hRes = T.wRes), T.rRes = T.wRes / T.hRes)
					}
					R.res = !!e, T.media = a.media ? H.chain3(a.media) : null, T.pa = {
						left: a.padding,
						top: 0
					}, T.paRange = 0 != a.padding ? H.chain3(a.padding) : null, T.maRange = 0 != a.margin ? H.chain4(a.margin) : null, R.setupInit || (R.res ? (f = n.width(), tt.varible(), T.rateLast = T.rate) : T.rate = 1), R.setupInit && !R.res && (T.rate = 1)
				},
				grab: function () {
					R.swipeBody ? X.toggleClass("grab", 1) : X.toggleClass("grab", -1), a.isViewGrabStop ? n.addClass(a.ns + "grabstop") : n.removeClass(a.ns + "grabstop")
				},
				direction: function (e) {
					T.can.dirs = "ver" != a.dirs || R.mobile ? "hor" : "ver", e && e.pagDirs || (T.pag.dirs = a.pag.dirs), R.ts || (g = T.cssTf = "hor" == T.can.dirs ? "left" : "top");
					var t = function (e) {
						var t = "hor" == T[e].dirs;
						T[e].cssTf = R.ts ? g : t ? "left" : "top", T[e].pageX = t ? "pageX" : "pageY"
					};
					t("can"), t("pag");
					var i = {
						left: "",
						top: ""
					};
					T.$s.css(i)
				},
				pagination: function () {
					R.pagList = "list" == a.pag.type, R.pagList && (R.swipePag = 0);
					var e = function (e, t) {
						return !R.pagOutside && !R.pagList && e.isPag && "tab" == t.type && "ver" == t.dirs
					};
					R.tabVer = e(a, a.pag) && "ver" == T.pag.dirs ? "top" == a.pag.pos ? "top" : "bottom" : null, R.setupInit && e(M, M.pag) && n.css({
						"margin-left": "",
						"margin-right": ""
					})
				},
				setupEnd: function () {
					R.setupInit && "fixed" == a.height && n.css("height", ""), "eerf" == a.rev[0] && U.eerf()
				},
				setup: function (e) {
					H.setupBegin(), u = N.num = T.$s.length, T.wRange = H.chain3(a.wSlide, "width"), H.swipeEvent(), H.idNum(), H.center(), H.slideshow(), R.thumb = "thumb" === a.pag.type || "hover" === a.pag.type, a.speed < 200 && (a.speed = 200), a.slideshow.delay < 500 && (a.slideshow.delay = 500), H.transform(), H.layout(), a.hCode && (a.height = "fixed"), H.fullscreen(), H.res(), H.grab(), H.direction(e), H.pagination(), H.setupEnd()
				},
				code: function (e) {
					H.setup(e), !R.setupInit && b.removeAttr("data-" + csVAR.codeData).removeData(csVAR.codeData), R.setupInit == S && (R.setupInit = 1), Y.addClass(e)
				},
				slide: function () {
					var t = 0,
						i = [],
						n = [],
						s = [],
						r = [],
						o = [],
						l = [],
						d = "line" == a.layout,
						c = d ? null : a.fx || a.fxDefault,
						p = "js";
					T.aIDtext = [], R.aIDtext = 0, null != a.fxOne ? (c = a.fxOne, p = "cssOne") : null != a.fxIn && (c = [a.fxIn, a.fxOut], p = "css"), T.$s.each(function () {
						var d = e(this),
							f = d.attr("data-" + a.dataSlide),
							h = d.data("slideLast") || {},
							g = c,
							m = p;
						f != S && "" != f && H.split(h, f, {}, 0), (1 == R.setupInit || R.apiAdd || R.apiRemove) && (0 == t && (T.$s0 = d), 1 == t && (T.$s1 = d), 2 == t && (T.$s2 = d), t == u - 1 && (T.$sn = d)), d.data({
							id: t,
							media: h.media
						}), R.pag && T.$pagItem.eq(t).data("id", t), h.fxOne ? (g = h.fxOne, m = "cssOne") : h.fxIn ? (g = [h.fxIn, h.fxOut], m = "css") : h.fx && (g = h.fx, m = "js"), s.push(g), r.push(m);
						var v = h.fxEasing || a.fxEasing;
						v && (v = X.easeName(v)), o.push(v), l.push(h.slot || a.slot), i.push(h.delay || a.slideshow.delay), n.push("none" == g ? 0 : h.speed || a.speed), T.classAdd[t] = nt.filter(h);
						var w = d.attr("id");
						a.deeplinking.isIDConvert && w != S && !R.aIDtext && (R.aIDtext = 1), T.aIDtext.push(w), ht && lt.check(h, d), d.removeAttr("data-" + a.dataSlide).data("slideLast", h), t++
					}), "free" == a.layout && H.slideAddon(), T.fx = s, T.fxType = r, T.fxEase = o, T.slot = l, T.fxNum = a.fxName.length, T.speed = n, T.delay = i, T.tDelay = T.delay[N.idCur], 1 == R.setupInit && (R.setupInit = 2)
				},
				slideAddon: function () {
					var t = 0,
						i = a.fLoop > 1 ? a.fLoop : u,
						n = 0,
						s = 0,
						r = function () {
							n = s, s = X.r(X.ra() * (i - 1))
						};
					for (x = 0; u > x; x++) {
						var o = T.$s.eq(x);
						if (o.addClass(a.fName + x), a.isInOutBegin && o.addClass(x == N.idCur ? a.fName + "-in" : a.fName + "-out"), a.isClassRandom) {
							do r(); while (s == n && a.fLoop > 2);
							o.addClass("fx" + s)
						} else a.fLoop > 1 && (o.addClass("fx" + t), t++, t >= a.fLoop && (t = 0))
					}
					if (a.isSlAsPag) {
						for (R.pag || (T.$pagItem = e("")), x = 0; u > x; x++) T.$pagItem = T.$pagItem.add(T.$s.eq(x));
						!R.pag && K.pag(), b.addClass("slide-as-pag")
					}
				},
				initEnd: function () {
					"auto" == a.height && n.addClass(a.ns + "hNative")
				}
			},
			U = {
				check: function () {
					var e = a.rev[0],
						t = !1;
					if ("erp" == e || "eerf" == e) t = !0;
					else if ("omed" == e) {
						var i = a.rev[1].split("").reverse().join(""); - 1 != document.URL.indexOf(i) && (t = !0)
					}
					return t
				},
				eerf: function () {
					var t = {
						fxOne: null,
						fxIn: null,
						fxOut: null,
						fxEasing: null,
						isSlideshow: !1,
						name: null
					};
					a = e.extend(!0, a, t), null == a.fx && (a.fx = a.layout = "line"), a.pag.dirs = "hor"
				}
			},
			V = {
				viewport: function () {
					var t = a.ns + a.viewportName,
						i = b.children("." + t);
					i.length ? n = i : (b.wrapInner(e(E, {
						"class": t
					})), n = b.children("." + t)), T.$viewport = n
				},
				canvas: function () {
					var t = a.ns + a.canvasName,
						s = a.canvasTag,
						r = n.children("." + t);
					if (r.length) s = r[0].tagName.toLowerCase();
					else {
						"div" == s && "li" == n.children()[0].tagName.toLowerCase() && (s = "ul");
						var o = "ul" == s ? "<ul></ul>" : E;
						n.children().wrapAll(e(o, {
							"class": t
						}))
					}
					i = T.$canvas = n.children("." + t), i.data({
						tagName: s,
						pos: {
							x: 0
						}
					})
				},
				slide: function (t) {
					var n = a.ns + a.slideName,
						s = t[0].tagName.toLowerCase();
					if ("li" == s || "div" == s || t.hasClass(n)) !t.children().length && t.removeClass(n);
					else {
						var r = i.data("tagName"),
							o = "ul" == r ? "<li></li>" : E,
							l = e(o, {
								"class": n
							});
						t.wrap(l), t = t.closest("." + n)
					}
					return t.addClass(n).addClass(a.ns + "sleep"), t.data({
						is: {
							loading: 0,
							loaded: 0,
							imgback: 0,
							layer: 0,
							video: 0,
							ajax: 0,
							pagEmpty: 0,
							loadBy: "normal"
						},
						$: {},
						html: {},
						item: {}
					}), V.icon.add(t, t, "slLoader"), T.$s = T.$s.add(t), t
				},
				capPagHTML: function (t) {
					var i = "",
						n = t.find("img, a." + a.ns + a.imgName);
					n.length && n.each(function () {
						var n = e(this);
						if (n.data(a.layerName) == S && n.parent("." + a.ns + a.slideName).length) {
							var s = this.tagName.toLowerCase();
							"img" == s ? i = n.attr("alt") : "a" == s && (i = n.html()), t.data("is").imgback = 1
						}
					});
					var s = t.children("." + a.ns + "capitem");
					s.length && (i = s.html(), s.remove()), t.data("html").cap = i;
					var r = t.children("." + a.ns + "pagitem");
					r.length || (r = e(E, {
						"class": a.ns + "pagitem"
					}), t.data("is").pagEmpty = 1), t.data("$").pagItem = r, r.remove()
				},
				structure: function () {
					V.viewport(), V.canvas(), T.$s = e(""), i.children().each(function () {
						V.slide(e(this))
					}), T.$s.each(function () {
						V.capPagHTML(e(this))
					})
				},
				searchDOM: function (t) {
					var i = e(),
						n = a.name;
					if (n || n >= 0 && null != n) {
						var s = e(t);
						s.length && s.each(function () {
							var t, a = e(this).attr("data-" + csVAR.codeData);
							a != S && "" != a && (t = X.valueName(a, "name")), t == n && (i = e(this))
						})
					}
					if (i.length) return i;
					var r = b.find(t);
					return r.length && r.each(function () {
						var t = e(this);
						return 0 == t.closest("." + a.ns + a.viewportName).length ? t : void 0
					}), e()
				},
				into: function (t, i) {
					var n;
					switch (t) {
						case "nav":
							s || (s = e(E, {
								"class": a.ns + a.navName
							}).appendTo(b)), n = s;
							break;
						case "media":
							l || (l = e(E, {
								"class": a.ns + "media"
							}).appendTo(b)), n = l;
							break;
						case "none":
							n = b
					}
					n.append(i)
				},
				nav: function () {
					var t = "." + a.ns + a.navName,
						i = V.searchDOM(t);
					if (i.length) {
						s = i;
						var n = b.find("." + a.ns + a.nextName),
							l = b.find("." + a.ns + a.prevName),
							d = b.find("." + a.ns + a.playName);
						n.length && (o = n), l.length && (r = l), d.length && (T.$playpause = d, a.slideshow.isPlayPause = 1)
					}
					s == S && (s = e(E, {
						"class": a.ns + a.navName
					})), r == S && (r = e(E, {
						"class": a.ns + a.prevName,
						text: "prev"
					}), s.append(r)), o == S && (o = e(E, {
						"class": a.ns + a.nextName,
						text: "next"
					}), s.append(o)), i.length || b.append(s)
				},
				play: function () {
					var t = "." + a.ns + a.playName,
						i = V.searchDOM(t);
					i.length ? T.$playpause = i : (T.$playpause = e(E, {
						"class": a.ns + a.playName,
						text: "play/pause"
					}), V.into(a.markup.playInto, T.$playpause)), R.autoRun || (R.pauseActive = 1, T.$playpause.addClass(a.ns + a.actived))
				},
				pagitem: function (e) {
					var t = e.data("$").pagItem;
					return R.thumb && j.preThumb(e, t), T.$pagItem = T.$pagItem.add(t), t
				},
				pag: function () {
					var t = " " + a.ns,
						i = t + "pag-",
						n = a.pag,
						s = t + "outside",
						r = n.dirs,
						o = t + a.pagName + t + n.type + i + r + i + n.pos,
						l = V.searchDOM("." + a.ns + a.pagName);
					R.pagOutside = !!l.length, T.$pag = l.length ? l.addClass(o + s) : e(E, {
						"class": o
					}), T.$pagInner = e(E, {
						"class": a.ns + "paginner"
					}), T.$pagItem = e(""), d = e(""), T.$s.each(function () {
						V.pagitem(e(this))
					}), "dash" != a.layout && T.$pagInner.append(T.$pagItem), T.$pag.append(T.$pagInner), l.length || ("top" == n.pos ? b.prepend(T.$pag) : b.append(T.$pag)), T.pag.viewport = T.$pag;
					var c = "";
					"tab" == n.type && (c += i + r + i + n.pos, R.pagOutside && (c += s), b.addClass(c))
				},
				cap: function () {
					var t = "." + a.ns + a.capName,
						i = V.searchDOM(t);
					c = i.length ? i : e(E, {
						"class": a.ns + a.capName
					}), T.$capCur = e(E, {
						"class": a.ns + "cap-cur"
					}), T.$capLast = e(E, {
						"class": a.ns + "cap-last"
					}), T.$capInner = e(E, {
						"class": a.ns + "capinner"
					}), T.$capInner.append(T.$capCur, T.$capLast).appendTo(c), i.length || b.append(c)
				},
				divImg: function (t, i, n) {
					var s = a.ns + a[t + "Name"],
						r = t.charAt(0).toUpperCase() + t.slice(1);
					if (T[t] = b.find("." + s), a["is" + r]) {
						if (!T[t].length) {
							var o = b.data("img" + t),
								l = o ? '<div class="' + s + '"><img src="' + o + '" alt="[' + t + ']"></div>' : '<div class="' + s + '"></div>';
							n && i.after(e(l)) || i.before(e(l))
						}
					} else T[t].length && T[t].remove()
				},
				refresh: function () {
					M.isOverlay != a.isOverlay && V.divImg("overlay", i, 1), M.isShadow != a.isShadow && V.divImg("shadow", n, 0)
				},
				icon: {
					add: function (t, i, n) {
						var s = e(E, {
							"class": a.ns + "loader",
							text: "loading"
						});
						t.data("$")[n] = s, i.append(s)
					},
					remove: function (e, t) {
						var a = e.data("$")[t];
						a && a.remove()
					}
				},
				other: function () {
					V.refresh()
				}
			},
			G = {
				way: function () {
					T.nAddLoad = 0, T.nLoaded = 0, R.preloaded = 0;
					var e = [],
						t = N.idCur,
						i = a.load,
						n = function () {
							for (x = 0; u > x;) e[x] = x++
						},
						s = function () {
							var t = T.idMap,
								a = X.c(u / 2 - 1),
								i = a,
								n = 1,
								s = 1,
								r = 1;
							for (e[0] = t[i], x = 1; u > x; x++) r ? (i = a + s, s++, r = 0) : (i = a - n, n++, r = 1), e[x] = t[i]
						},
						r = function () {
							var i = 1,
								n = 1,
								s = 0,
								r = 0;
							for (e[0] = a.idBegin, x = 1; u > x; x++) t != u - 1 && (i || s) ? (e[x] = t + n, s ? n++ : i = 0, e[x] >= u - 1 && (r = 1)) : (e[x] = t - n, n++, i = !r, e[x] <= 0 && (s = 1))
						};
					T.nPaLoaded = i.amountEachLoad + 1, "all" == i.preload && (i.preload = u), i.preload <= 0 && (i.preload = 1), !R.cenLoop || a.isPag && "tab" == a.pag.type ? 0 == t ? n() : r() : s(), ht && (e = lt.removeAutoLoad(e)), T.aLoad = e
				},
				next: function (e) {
					e.data("is").ajax && ht ? lt.get(e) : G.slideBegin(e)
				},
				setupBegin: function () {
					var e = T.aLoad;
					null != e && e.shift(), T.nAddLoad++, T.nAddLoad < a.load.preload && null != e && G.slideBegin(T.$s.eq(e[0]))
				},
				setupEnd: function (e) {
					var t = T.aLoad,
						i = a.load;
					if (T.nLoaded++, R.preloaded || T.nLoaded != a.load.preload || (R.preloaded = 1), !i.isNearby && (R.preloaded && (T.nPaLoaded--, T.nPaLoaded || (T.nPaLoaded = a.load.amountEachLoad)), null != t && R.preloaded && T.nPaLoaded >= i.amountEachLoad && !e.data("is").loadAdd))
						for (x = T.nPaLoaded; x > 0 && null != t && t.length; x--) G.next(T.$s.eq(t[0]))
				},
				add: function (e) {
					var t = e.data("is");
					if (!t.loading) {
						R.loadAll = 0;
						var a = T.aLoad;
						if (null != a)
							for (x = a.length - 1; x >= 0; x--) a[x] == N.idCur && (a.splice(0, 0, a.splice(x, 1)[0]), x = -1);
						t.loadAdd = 1, G.next(e)
					}
				},
				slideBegin: function (t) {
					var i = t.data("id"),
						n = t.data("is");
					N.ev.trigger("loadBegin", [t, i]), "normal" == n.loadBy && G.setupBegin(), t.removeClass(a.ns + "sleep");
					var s = a.ns + a.imgName,
						r = t.find("img, a." + s),
						o = t.find("." + csVAR.codeClass + " img, ." + csVAR.codeClass + " a." + s);
					r = r.not(o);
					var l = r.length;
					n.loading = 1, t.data({
						imgNum: l,
						nCur: 0
					}), i == a.idBegin && b.addClass(a.ns + "init"), "fixed" == a.height && i == a.idBegin && W.codeHeightFix(), R.res && a.isFullscreen && at.varible(), l ? r.each(function () {
						var i = e(this),
							n = i.data(a.layerName) == S && i.parent("." + a.ns + a.slideName).length && "dash" != a.layout ? 1 : 0;
						"a" == this.tagName.toLowerCase() && (i = z.tagSwap(i)), i.data({
							$: {
								slide: t
							},
							is: {
								imgback: n,
								srcOutside: 0,
								loaded: 0
							},
							src: []
						}), n && (t.data("$").imgback = i, t.data("is").imgback = 1, z.wrap(i));
						var s = i.data("src"),
							r = i.attr("src"),
							o = /^data\:image\//g.test(r);
						!o && s.push(r);
						var l = i.attr("data-" + a.lazyName);
						l != S && (s.push(l), i.removeAttr("data-" + a.lazyName)), z.data(i);
						i.data();
						z.load(i)
					}) : G.slideEnd(t)
				},
				slideEnd: function (e) {
					var t = e.height(),
						i = e.data("id");
					e.data("height", t), e.data("is").loaded = 1, R.initLoaded || F.load(), z.backCenterHor(e), "fixed" == a.height && z.backCenter.setup(e), "dash" == a.layout && (L.height[i] = e.outerHeight(!0), W.codeHeight()), e.addClass(a.ns + "ready"), V.icon.remove(e, "slLoader"), !!e.data("isPlayNext") && N.play();
					var n = "loadSlide." + i;
					N.ev.trigger(n), N.ev.trigger("loadEnd", [e, i]), null != T.aLoad && 0 == T.aLoad.length && (R.loadAll = 1, T.aLoad = null, N.ev.trigger("loadAll")), R.apiAdd && (N.refresh(), R.apiAdd = 0), G.setupEnd(e)
				}
			},
			z = {
				data: function (e) {
					var t = e.data("image");
					if (t != S && "" != t) {
						var a = {};
						H.split(a, t, {}), e.data(a), e.removeAttr("data-image")
					}
				},
				load: function (e) {
					var t = function () {
							var t = e.data("$").slide;
							t.data("nCur", t.data("nCur") + 1), t.data("nCur") == t.data("imgNum") && setTimeout(function () {
								G.slideEnd(t)
							}, 10);
							var a = t.data("is").addThumb,
								i = e.data("is").imgback;
							if (R.pag && a && i) {
								var n = t.data("$").thumb,
									s = e.clone(!0);
								j.addThumb(s, n, t)
							}
						},
						a = new Image,
						i = e.data("src"),
						n = i.pop();
					a.onload = function () {
						z.prop(e, this), t()
					}, a.onerror = function () {
						i.length ? z.load(e) : (e.attr("alt", "[ image load failed ]"), R.e && console.warn("[" + csVAR.codeName + ": image load failed] -> " + n), t())
					}, e.attr("src", n), a.src = n
				},
				prop: function (e, t) {
					var a = t.width,
						i = t.height,
						n = a / i;
					e.data({
						width: a,
						height: i,
						rate: n
					}), e.data("is").loaded = 1, R.res && T.rate < 1 && e.css({
						width: X.r(a * T.rate),
						height: X.r(i * T.rate)
					}), e.data("is").imgback && z._fit(e)
				},
				tagSwap: function (t) {
					var i = {};
					i["data-" + a.lazyName] = t.attr("href");
					var n, s = t.attr("class"),
						r = t.attr("id"),
						o = t.attr("style"),
						l = t.attr("data-image"),
						d = t.attr("data-" + a.dataVideo),
						c = t.attr("data-" + a.dataMap),
						u = t.attr("data-imgthumb"),
						p = a.isCap ? "[img]" : t.text(),
						f = a.ns + a.imgName,
						h = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
						g = e("<img>", {
							src: h,
							alt: p
						}).attr(i),
						m = "data-" + a.layerName,
						v = t.attr(m),
						w = t.attr("data-" + a.dataVideo),
						C = t.attr("data-" + a.dataMap);
					if (v && (w || C)) {
						var y = e(E);
						y.append(g), n = y
					} else n = g;
					if (v) {
						var i = {};
						i[m] = v, n.attr(i)
					}
					return s != f && n.addClass(s).removeClass(f), r && n.attr("id", r), o && n.attr("style", o), l && n.attr("data-image", l), d && n.attr("data-" + a.dataVideo, d), c && n.attr("data-" + a.dataMap, c), u && n.attr("data-imgthumb", u), R.ie && g.removeAttr("width height"), t.after(n).remove(), g
				},
				wrap: function (t) {
					var i = a.ns + "imgback",
						n = e(E, {
							"class": i
						});
					"dash" != a.layout && t.wrap(n).removeClass(i)
				},
				_fit: function (e) {
					var t = e.data("rate"),
						i = e.data("width"),
						n = e.data("height"),
						s = function () {
							e.css({
								width: f,
								height: X.r(f / t)
							})
						},
						r = function () {
							e.css({
								width: X.r(p * t),
								height: p
							})
						},
						o = function () {
							z.updateSize(e)
						};
					"autofit" == a.imgWidth || "smallfit" == a.imgWidth && f > i || "largefit" == a.imgWidth && i > f ? s(e) : "fixed" == a.height ? "autofit" == a.imgHeight || "smallfit" == a.imgHeight && p > n || "largefit" == a.imgHeight && n > p ? r(e) : "autofit" == a.img ? t > h ? s(e) : r(e) : "smallfit" == a.img && f > i && p > n ? t > h ? s(e) : r(e) : "largefit" == a.img && i > f && n > p ? t > h ? s(e) : r(e) : "autofill" == a.img ? t > h ? r(e) : s(e) : "smallfill" == a.img && f > i && p > n ? t > h ? r(e) : s(e) : "largefill" == a.img && i > f && n > p ? t > h ? r(e) : s(e) : o(e) : o(e)
				},
				updateSize: function (e) {
					e.css(T.rate < 1 ? {
						width: X.r(e.data("width") * T.rate),
						height: X.r(e.data("height") * T.rate)
					} : {
						width: "",
						height: ""
					})
				},
				backCenter: {
					get: function (e) {
						var t = e.data("$");
						return t && t.imgback ? t.imgback.parent("." + a.ns + "imgback") : null
					},
					setup: function (e) {
						var t = z.backCenter.get(e);
						if (null != t) {
							T.top = X.r((p - t.height()) / 2);
							var a = 0 == T.top ? "" : T.top;
							t.css("top", a)
						}
					},
					reset: function (e) {
						var t = z.backCenter.get(e);
						null != t && t.css("top", "")
					}
				},
				backCenterHor: function (t) {
					var a = function (e) {
						var t = e.data("$").imgback;
						if (t != S) {
							var a = X.pInt(t.css("left")),
								i = ~~(-(t.width() - T.wCanvas) / 2);
							a !== i && t.css("left", i)
						}
					};
					t == S ? T.$s.each(function () {
						a(e(this))
					}) : a(t)
				},
				backUpdate: function () {
					var t = i.find("." + a.ns + "imgback > img");
					t.length && t.each(function () {
						var t = e(this);
						t.data("is").imgback && ("none" != a.imgWidth || "fixed" == a.height && ("none" != a.imgHeight || "none" != a.img) ? z._fit(t) : z.updateSize(t))
					})
				},
				autoShow: function (e) {
					var t = T.$s.eq(e ? e : N.idCur).data("$").imgback;
					t && (t.css("position", "static"), setTimeout(function () {
						t.css("position", "")
					}, 2))
				}
			},
			j = {
				preThumb: function (t, i) {
					var n = e(E, {
						"class": a.ns + a.thumbWrap
					});
					i.append(n), t.data("$").thumb = n, V.icon.add(t, i, "thumbLoader");
					var s = t.data("imgthumb");
					if (s || (s = t.find("[data-imgthumb]").data("imgthumb")), s) {
						var r = new Image;
						r.onload = function () {
							var a = e("<img></img>", {
								src: s
							}).data("rate", r.width / r.height);
							j.addThumb(a, n, t)
						}, r.onerror = function () {
							R.e && console.warn("[" + csVAR.codeName + "thumb load fail] -> " + s)
						}, r.src = s
					} else t.data("is").addThumb = 1
				},
				addThumb: function (e, t, i) {
					var n = a.pag.width,
						s = a.pag.height,
						r = "number" == typeof n ? n : t.width(),
						o = "number" == typeof s ? s : t.height(),
						l = r / o,
						d = e.data("rate"),
						c = "",
						u = {
							width: "",
							height: ""
						};
					r && o && (d > l ? (c = a.ns + "hfit", u.left = -m.r((d * o - r) / 2)) : (c = a.ns + "wfit", u.top = -m.r((r / d - o) / 2))), e.css(u), t.addClass(c).append(e), V.icon.remove(i, "thumbLoader")
				},
				sizeItem: function () {
					var e = T.pag,
						t = a.pag,
						i = "number" == typeof t.width ? t.width : "",
						s = "number" == typeof t.height ? t.height : "";
					T.$pagInner.css({
						width: i,
						height: s,
						"margin-right": "",
						"margin-bottom": ""
					});
					var r = a.ns + "wfit",
						o = a.ns + "hfit";
					"" == i ? T.$pagInner.removeClass(r) : T.$pagInner.addClass(r), "" == s ? T.$pagInner.removeClass(o) : T.$pagInner.addClass(o);
					var l = T.$pagItem,
						d = X.valueMax,
						c = "" != i ? i : d(l, "width"),
						u = "" != s ? s : d(l, "height");
					e.wCon = d(l, "outerWidth", !0), e.hCon = d(l, "outerHeight", !0);
					var p = e.maRight = e.wCon - c,
						f = e.maBottom = e.hCon - u;
					T.$pagInner.css({
						width: R.pagOutside && "ver" == e.dirs ? "" : c,
						height: u,
						"margin-right": p,
						"margin-bottom": f
					}), "tab" == t.type && T.$pagInner.addClass(r + " " + o);
					var h = "padding-",
						g = "border-",
						m = function (e) {
							var t = 0,
								a = 0;
							for (x = e.length - 1; x >= 0; x--) t += X.pInt(n.css(e[x])), a += X.pInt(T.$pag.css(e[x]));
							return t - a
						};
					T.viewSpace = {
						hor: m([h + "left", h + "right", g + "left-width", g + "right-width"]),
						ver: m([h + "top", h + "bottom", g + "top-width", g + "bottom-width"])
					}
				},
				prop: function (e) {
					var t, i = T.pag,
						n = "hor" == i.dirs;
					i.width = T.$pag.width(), i.height = T.$pag.height();
					var s, r = R.pagOutside && !n ? "self" : a.pag.sizeAuto,
						o = {
							width: "",
							height: ""
						};
					if (null == r ? s = n ? i.width : i.height : "full" == r ? s = n ? o.width = f + T.viewSpace.hor : o.height = p + T.viewSpace.ver : "self" == r && (s = n ? o.width = i.wCon * u : o.height = i.hCon * u), i.wSwap = s, T.$pag.css(o), n && !R.pagOutside && "justified" == a.pag.align && (null == r || "full" == r)) {
						var l, d, c = X.r(s / u),
							h = 0;
						n && i.wCon < c ? (i.wCon = c, l = c - i.maRight, h = 1) : !n && i.hCon < c && (i.hCon = c, d = c - i.maBottom, h = 1), h && T.$pagInner.css({
							width: l,
							height: d
						})
					}
					i.wTranslate = n ? i.wCon : i.hCon, t = i.wSwap - i.wTranslate * u, i.xMin = 0, i.xMax = 0 > t ? t : 0, i.wEdge = (i.wSwap - i.wTranslate) / 2, i.xCanvas = 0, i.isViewLarge = t > 0, i.align = a.pag.align, ("justified" == i.align || !i.isViewLarge && "begin" != i.align) && (i.align = "begin"), "center" == i.align ? (i.xPull = i.xCanvas = X.r(t / 2), i.xMax = i.xPull + i.wTranslate * u, q.translateX(T.$pagInner, i.xCanvas, 1, 1)) : "end" == i.align && (i.xPull = i.xCanvas = t, i.xMax = i.wSwap, q.translateX(T.$pagInner, i.xCanvas, 1, 1)), e && q.translateX(T.$pagInner, i.xCanvas, 0, 1)
				},
				size: function () {
					var e = T.pag,
						t = "hor" == e.dirs;
					for (e.pBegin = [], x = 0; u > x; x++) e.pBegin[x] = e.wTranslate * x;
					var a = t ? "tlx" : "tly",
						i = {};
					for (x = 0; u > x; x++) i[e.cssTf] = X[a](e.pBegin[x]), T.$pagItem.eq(x).css(i)
				},
				itemCenter: function () {
					var e = T.pag;
					if (!e.isViewLarge) {
						var t = -(N.idCur * e.wTranslate) + e.wEdge;
						if (t > 0 ? t = 0 : t < e.xMax && (t = e.xMax), t != e.xCanvas || 0 == t) {
							var i = {},
								n = a.pag.speed,
								s = a.pag.ease,
								r = "hor" == e.dirs ? "tlx" : "tly";
							if (i[e.cssTf] = X[r](X.r(t)), R.ts) {
								var o = X.ts(g, n, X.easeName(s));
								T.$pagInner.css(o), setTimeout(function () {
									T.$pagInner.css(i)
								}, 2), X.tc(A.pagCenter), A.pagCenter = setTimeout(function () {
									X.tsRemove(T.$pagInner)
								}, n)
							} else T.$pagInner.animate(i, {
								duration: n,
								queue: !1,
								easing: s
							});
							e.xCanvas = t
						}
					}
				},
				tabVer: function () {
					R.pag && ("top" == R.tabVer ? n.css("margin-left", T.pag.wCon) : "bottom" == R.tabVer && n.css("margin-right", T.pag.wCon))
				},
				toHor: function () {
					var e = a.pag,
						t = null;
					if ("tab" == e.type && "ver" == e.dirs) {
						var n = T.pag,
							s = ("hor" == n.dirs, e.wMinToHor),
							r = b.width();
						"ver" == n.dirs && s > r ? (t = n.dirs = "hor", !!T.$pag && T.$pag.stop(!0).css("height", "")) : "hor" == n.dirs && r >= s && (t = n.dirs = "ver")
					}
					t && (i.css("width", ""), N.prop({}, 0, {
						pagDirs: t
					}))
				},
				buffer: function () {}
			},
			q = {
				translateX: function (e, t, a, n, s, r) {
					var o = null != e ? e : T.swipeCur,
						l = i.is(o) ? T.can : T.pag,
						d = n ? t : -t * l.wTranslate + l.xCanvas,
						c = s ? s : T.speed[N.idCur],
						u = r ? X.easeName(r) : T.ease;
					l.xCanvas = d;
					var p = {};
					if (R.ts) {
						X.tc(o.data("timer")), a || X.tsAdd(o, c, u);
						var f = "hor" == l.dirs ? "tlx" : "tly";
						p[l.cssTf] = T[f + 0] + d + "px" + T[f + 1], o.css(p), o.data("timer", setTimeout(function () {
							X.tsRemove(o)
						}, c))
					} else p[l.cssTf] = d, a ? o.stop(!0, !0).css(p) : o.animate(p, {
						duration: c,
						queue: !1,
						easing: u
					})
				},
				objTranslateX: function (e, t, i, n) {
					var s;
					s = i ? t : "dash" == a.layout ? L.pBegin[t] : t * T.can.wTranslate, "number" == typeof n && (s += n);
					var r = {},
						o = "hor" == T.can.dirs ? "tlx" : "tly";
					r[g] = R.ts ? X[o](s) : s, e.css(r)
				},
				bufferX: function (e) {
					var t = a.layout,
						n = N.idCur,
						s = R.swipeNav,
						r = "right" == s,
						o = "left" == s,
						l = i.is(T.swipeCur),
						d = l ? T.can : T.pag,
						c = d.wTranslate,
						p = d.xCanvas,
						f = k.offset < 0 ? 1 : -1,
						h = k.pageX1 - k.pageX0;
					if ((!l || a.isLoop || "line" != t && "dash" != t) && l) {
						if (l && ("dot" == t || "free" == t)) {
							var g = R.mobile ? 2 : 4;
							h /= g, !a.isLoop && (0 >= n && r || n >= u - 1 && o) && (h /= 4)
						}
					} else {
						if (k.buffer > d.xMin && r || k.buffer < d.xMax && o) {
							var m = R.mobile ? 4 : 8;
							h /= m
						}
						a.isViewGrabStop && (k.buffer > 0 && r ? X.toggleClass("stop", 1) : k.buffer < d.xMax && o && X.toggleClass("stop", 0))
					}
					if ("free" != t) {
						k.buffer += !l || "coverflow" != a.view && "scale" != a.view ? h : h * c / T.wCon;
						var v = "hor" == d.dirs ? "tlx" : "tly",
							w = R.mobile ? 0 : 1,
							C = k.buffer.toFixed(w),
							y = {};
						y[d.cssTf] = X[v](C), T.swipeCur.css(y), l && Q.buffer[a.view](f)
					}
					if (l && "line" == t) {
						var x = p - c * f;
						k.buffer * f < x * f && (R.swipeBegin = 1, k.x0 = e, d.xCanvas -= c * f, T.nSwipe += f, _.run(f, 0, 1))
					}
					R.swipeBegin && (R.swipeBegin = 0)
				},
				nearX: function () {
					var e = i.is(T.swipeCur),
						t = e ? T.can : T.pag,
						n = k.offset;
					if (R.ease = "touch", e)
						if ("dash" == a.layout) {
							var s = L.nBegin;
							if (0 > n)
								for (; L.pBegin[s] < -k.buffer;) s++;
							else if (n > 0)
								for (; L.pBegin[s] > -k.buffer;) s--;
							var r = s != L.nBegin;
							_.run(s, r)
						} else {
							var o = T.pa.left ? T.wCon - 2 * T.pa.left : T.wCon,
								l = R.mobile ? 600 : 400,
								d = T.tDrag1 - T.tDrag0 < l,
								c = X.r(o / 3),
								p = X.r(o / 4),
								f = X.r(o / 20),
								h = d ? f : "dot" == a.layout ? p : c,
								g = 100,
								m = T.speed[N.idCur] / 2,
								v = !1,
								w = 0; - h > n && (a.isLoop || !a.isLoop && N.idCur < u - 1) && u - 1 ? ("dot" == a.layout && q.translateX(null, 0, 0, 0, g), _.run(w + 1, 0)) : n > h && (a.isLoop || !a.isLoop && N.idCur > 0) && u - 1 ? ("dot" == a.layout && q.translateX(null, 0, 0, 0, g), _.run(w - 1)) : v ? _.run(w) : (q.translateX(i, 0, 0, 0, m), R.center && Q.restore[a.view]()), (-h > n || n > h) && a.isSlideshow && (R.hoverAction = 1)
						}
					else if (0 != n) {
						t.xCanvas = k.buffer;
						var C = a.pag.speed;
						"center" == t.align || "end" == t.align ? t.xCanvas != t.xPull && q.translateX(T.$pagInner, t.xPull, 0, 1, C) : t.xCanvas > 0 ? q.translateX(T.$pagInner, 0, 0, 1, C) : t.xCanvas < t.xMax && q.translateX(T.$pagInner, t.xMax, 0, 1, C)
					}
					q.flywheel()
				},
				centerIdMap: function () {
					var e = [],
						t = X.c(u / 2) + N.idCur;
					for ("even" == T.center.isNum && t++, t >= u && (t -= u), x = 0; u > x; x++) t >= u && (t = 0), e[x] = t++;
					T.idMap = e
				},
				balance: function (e, t, i) {
					var n = T.nMove > 0,
						s = n ? {
							is: 1,
							s: 1,
							id0: 0,
							idN: u - 1
						} : {
							is: 0,
							s: -1,
							id0: u - 1,
							idN: 0
						},
						r = t ? 1 : X.a(T.nMove);
					s.sp = i == S ? T.speed[N.idCur] : i, s.isLive = e;
					var o, l, d, c = T.can.wTranslate;
					for (x = 0; r > x; x++) {
						o = T.idMap[s.id0], l = T.pBegin[s.idN] + c * s.s;
						var d = {};
						if ("basic" == a.view || "mask" == a.view) {
							var p = "hor" == T.can.dirs ? "tlx" : "tly";
							d[g] = X[p](l)
						} else "coverflow" == a.view ? (d = Q.tf1(l, -a.coverflow.rotate * s.s), d["z-index"] = T.zMap[s.idN] - 1) : "scale" == a.view && (d = Q.tf2(l, a.scale.intensity / 100));
						var f = s.is;
						X.shift(T.idMap, f), X.push(T.idMap, o, f), X.shift(T.pBegin, f), X.push(T.pBegin, l, f), X.shift(T.tfMap, f), X.push(T.tfMap, d, f);
						var h = {},
							m = T.$s.eq(o);
						"basic" != a.view && 3 == u ? (X.tc(m.data("timer")), h = X.ts(g, s.sp, T.ease), m.data("timer", setTimeout(function () {
							X.tsRemove(m)
						}, s.sp))) : h[v] = "", m.css(h).css(d), Q.balance[a.view](s)
					}
				},
				fillHole: function () {
					if ("basic" == a.view) {
						T.sClone.length && T.sClone.remove();
						var e = T.center.n,
							t = T.nMove > 0 ? e.left : e.right;
						t -= e.edge;
						var n = X.a(T.nMove);
						if (n > t) {
							for (x = t; n > x; x++) {
								var s = T.nMove > 0 ? T.idMap[x] : T.idMap[u - 1 - x],
									r = T.$s.eq(s).clone().appendTo(i);
								T.sClone = T.sClone.add(r)
							}
							X.tc(A.fillHole), A.fillHole = setTimeout(function () {
								T.wSlide * u < f ? T.sClone.animate({
									opacity: 0
								}, {
									duration: 200,
									complete: function () {
										T.sClone.remove()
									}
								}) : T.sClone.remove()
							}, T.speed[N.idCur])
						}
					}
				},
				animRebound: function (e) {
					if (a.isAnimRebound) {
						var t = T.can,
							n = (a.layout, "next" == e),
							s = n ? -1 : 1,
							r = 150,
							o = 30,
							l = n ? t.xMax : t.xMin,
							d = 130 * s + l,
							c = i.css(g);
						c = R.ts ? "none" == c ? l : X.valueX(c) : "auto" == c ? l : parseInt(c);
						var u = o * s + c,
							p = function () {
								q.translateX(null, u, 0, 1, r)
							},
							f = function () {
								q.translateX(null, l, 0, 1)
							};
						u / s > d / s ? f() : (p(), X.tc(A.rebound), A.rebound = setTimeout(f, r))
					}
				},
				flywheel: function () {
					var e = (T.swipeCur, i.is(T.swipeCur)),
						t = e ? T.can : T.pag;
					if (e) {
						var n = T.tDrag1 - T.tDrag0;
						s = 200 > n && X.a(T.nSwipe) > 0
					} else {
						var n = T.tDrag1 - T.tDrag0,
							s = k.buffer < 0 && k.buffer > t.xMax && 200 > n && X.a(k.offset) > 10;
						if (s) {
							var r = k.pageX1 - k.x0Fix,
								o = k.buffer + r,
								l = a.pag.speed;
							if (o > 0 || o < t.xMax) {
								var d = [];
								o > 0 ? d[0] = 0 : o < t.xMax && (d[0] = t.xMax), d[1] = (o - d[0]) / 8 + d[0], d[2] = d[0];
								var c = a.pag.ease;
								q.translateX(T.$pagInner, d[0], 0, 1, l / 4, "linear"), X.tc(A.flywheel1), X.tc(A.flywheel2), A.flywheel1 = setTimeout(function () {
									q.translateX(T.$pagInner, d[1], 0, 1, l / 2, c)
								}, l / 4), A.flywheel2 = setTimeout(function () {
									q.translateX(T.$pagInner, d[2], 0, 1, l, c)
								}, l / 4 + l / 2)
							} else q.translateX(T.$pagInner, o, 0, 1, l)
						}
					}
				}
			},
			W = {
				general: function () {
					if (!R.res && W.margin(), "line" == a.layout || "dot" == a.layout || "free" == a.layout) {
						var e;
						R.center ? (e = tt.valueGet(T.wRange, "width"), e > 0 && 1 >= e && (e *= T.wSwap)) : e = f, T.wSlide = parseInt(e), T.wCanvas = "hor" == T.can.dirs ? T.wSlide : f, i.css("width", T.wCanvas)
					}
					R.loadAll && z.backCenterHor(), W.translateW(), "line" == a.layout && W._lineWidth(), "dash" == a.layout && W._dashWidth(), R.pag && !R.pagList && (j.size(), j.itemCenter())
				},
				_lineWidth: function () {
					if (R.cenLoop) {
						for (var e = 0, t = 0; f > e;) e = (T.wSlide + T.ma[0] + T.ma[1]) * (2 * t + 1), t++;
						var n = t - 1;
						2 * n >= u && (n = ~~((u - 1) / 2)), T.center.n.edge = n
					}
					Q.size[a.view](), T.swipeCur = i, X.tsRemove(i), a.isLoop ? q.translateX(null, T.can.xCanvas, 1, 1) : q.translateX(null, N.idCur, 1)
				},
				_dashWidth: function () {
					L.pBegin = [], L.pEnd = [], L.width = [], L.mCanvas = parseInt(i.css("margin-left")), R.canvasEnd = 0;
					var e = T.$s.length,
						t = 0;
					for (l = 0; e > l; l++) {
						var a = T.$s.eq(l),
							n = a.attr("style");
						n != S && n.indexOf("width") && a.css("width", "");
						var s = a.outerWidth(!0);
						if (s > f) {
							a.css("width", f);
							var r = parseInt(a.css("margin-left")),
								o = parseInt(a.css("margin-right"));
							s = f + r + o
						}
						L.width[l] = s, L.pBegin[l] = t, t += s, L.pEnd[l] = t, q.objTranslateX(a, l)
					}
					if (R.loadAll)
						for (L.height = [], l = 0; e > l; l++) L.height[l] = T.$s.eq(l).outerHeight(!0);
					if (R.pag) {
						L.pagID = [0], T.$pagItem.detach(), T.$pag.append(T.$pagItem.eq(0));
						for (var l = 0, d = 0; e > l; l++) d += L.width[l], d > f - L.mCanvas && 0 != l && (T.$pag.append(T.$pagItem.eq(l)), L.pagID.push(l), d = L.width[l]);
						L.pagNum = L.pagID.length, K.pag()
					}
					var c = parseInt(T.$s.eq(u - 1).css("margin-right"));
					L.pMax = -(L.pEnd[e - 1] - c - f + L.mCanvas), L.lastBegin = L.nBegin, L.nBegin = 0, _.run(L.lastBegin, 0)
				},
				translateW: function () {
					var e = T.ma[0],
						t = T.ma[1];
					T.maRange || f == n.innerWidth() || (e = T.ma[0] = X.pInt(n.css("padding-left")), t = T.ma[0] = X.pInt(n.css("padding-right"))), T.wCon = T.wSlide + e + t;
					var i, s = a.layout;
					i = "line" == s && R.center ? X.r((T.wSwap - T.wSlide) / 2) : 0;
					var r = T.can;
					r.wTranslate = T.wCon, r.xCanvas = i, "line" == s ? (r.xMin = i, r.xMax = -(T.wCon * u - f) - i) : "dot" == s && (r.xMin = r.xMax = 0), R.pag && !R.pagList && j.prop()
				},
				margin: function () {
					var e = 0;
					if (T.maRange) {
						var t = T.maRange,
							a = $.width();
						for (x = t.num - 1; x >= 0; x--) t[x].from <= a && a <= t[x].to && (T.ma = [t[x].left, t[x].right], e = 1)
					}
					e || (T.ma = [0, 0])
				},
				codeHeight: function (e) {
					var t = function (t, i, n) {
							var s = e ? 0 : a.speedHeight - 10;
							n && (p = T.hCode = t), R.mobile ? i.css("height", t) : i.delay(2).animate({
								height: t
							}, {
								duration: s,
								queue: !1,
								complete: function () {
									i.css("overflow", "")
								}
							})
						},
						i = function () {
							var i = T.$s.eq(N.idCur).outerHeight(!0);
							"auto" == a.height && (p != i && i > 0 || e) && (t(i, n, 1), !R.pag || R.pagList || "ver" != T.pag.dirs || R.pagOutside || "full" != a.pag.sizeAuto || (j.prop(1), t(i + T.viewSpace.ver, T.$pag, 0)))
						},
						s = function () {
							{
								var e = 0;
								L.nEnd - L.nBegin
							}
							for (x = L.nBegin; x <= L.nEnd; x++) {
								var a = L.height[x];
								a != S && a > e && (e = a)
							}
							e > 0 && e != p && t(e, n, 1)
						};
					X.tc(A.codeHeight), A.codeHeight = setTimeout(function () {
						"dash" == a.layout ? s() : i()
					}, 30)
				},
				codeHeightFix: function () {
					var t = function (e) {
						n.css("height", e)
					};
					if (a.isFullscreen) {
						var i = I.height();
						if (null != a.offsetBy) {
							var s = 0,
								r = 0,
								o = 0,
								l = e(T.offsetBy.top);
							l.length && (l.each(function () {
								s += e(this).outerHeight(!0)
							}), l.find("img").length && (o = 1));
							var d = e(null == T.offsetBy.bottom ? "" : T.offsetBy.bottom);
							d.length && (d.each(function () {
								r += e(this).outerHeight(!0)
							}), d.find("img").length && (o = 1)), i -= s + r, o && I.load(function () {
								N.refresh()
							})
						}
						p = T.hCode = i, t(p)
					} else if (T.hRes) p = T.hCode = X.r(T.hRes * T.rate), t(p);
					else {
						var i = n.height();
						null != a.hCode && i != a.hCode && (i = a.hCode, t(i)), i || (i = 0), p = T.hCode = i
					}
					W.wCode(), h = f / p
				},
				slideHeight: function () {
					T.$s.each(function () {
						var t = e(this);
						z.backCenter.reset(t), "fixed" == a.height && z.backCenter.setup(t)
					})
				},
				wCode: function () {
					R.pag && j.tabVer(), f = n.width(), T.wSwap = "hor" == T.can.dirs ? f : p
				}
			},
			Q = {
				tf1: function (e, t) {
					var a = "translate3d(" + e.toFixed(1) + "px, 0, 0)";
					t != S && (a += " rotateY(" + t.toFixed(1) + "deg)");
					var i = {};
					return i[g] = a, i
				},
				tf2: function (e, t) {
					var a = "translate3d(" + e.toFixed(1) + "px, 0, 0)";
					t != S && (a += " scale(" + t + ")");
					var i = {};
					return i[g] = a, i
				},
				size: {
					basic: function () {
						T.pBegin = [];
						var e = T.pBegin,
							t = R.cenLoop ? T.center.n.left : 0,
							a = T.can;
						for (x = 0; u > x; x++) e[x] = a.wTranslate * (-t + x);
						var i, n = "hor" == a.dirs,
							s = n ? "tlx" : "tly",
							r = {};
						for (T.tfMap = [], x = 0; u > x; x++) i = R.cenLoop ? T.idMap[x] : x, r[a.cssTf] = X[s](e[x]), T.tfMap.push(r), T.$s.eq(i).css(r)
					}
				},
				buffer: {
					basic: function () {}
				},
				balance: {
					basic: function () {}
				},
				restore: {
					basic: function () {}
				}
			},
			_ = {
				line: function (e) {
					R.ts && X.tsRemove(T.swipeCur), _.idCur(e), W.codeHeight(), X.tc(A.lineEnd), A.lineEnd = setTimeout(_.end, T.speed[N.idCur]), R.cenLoop ? (e.isID && q.fillHole(), setTimeout(function () {
						_.lineTrans(e)
					}, e.isID ? 10 : 0)) : setTimeout(function () {
						!e.isLive && q.translateX(i, e.num)
					}, 0)
				},
				lineTrans: function (e) {
					var t = X.a(e.num);
					if ("basic" != a.view && t > 1) {
						var n = X.r(speed[N.idCur] / t),
							s = 0,
							r = e.num > 0 ? 1 : -1,
							o = function (t, a) {
								setTimeout(function () {
									T.ease = X.easeName(a), R.easeLast = "multi", q.balance(e.isLive, r, n + 100), !e.isLive && q.translateX(i, r, 0, 0, n + 100)
								}, t - 100)
							};
						for (x = 0; t > x; x++, s += n) {
							var l = x == t - 1 ? a.easeMove : "linear";
							o(s, l)
						}
						R.lockSwipe = R.lockNav = 1, setTimeout(function () {
							R.lockSwipe = R.lockNav = 0
						}, T.speed[N.idCur])
					} else q.balance(e.isLive), e.isLive || q.translateX(i, e.num)
				},
				dash: function (e) {
					R.ts && X.tsRemove(T.swipeCur), _.idCurDash(e), X.toggleDash(), !a.isLoop && e.num > 0 && L.nEnd == u - 1 ? (q.translateX(null, L.pMax, 0, 1), R.canvasEnd = 1) : !a.isLoop && e.num < 0 && R.canvasEnd ? (q.translateX(null, -L.pBegin[L.nBegin], 0, 1), R.canvasEnd = 0) : q.translateX(null, -L.pBegin[L.nBegin], 0, 1), W.codeHeight(), setTimeout(_.end, T.speed[0] + 10)
				},
				dot: function (e) {
					_.idCur(e);
					var t = {};
					t.$sCur = T.$s.eq(N.idCur), t.$sLast = T.$s.eq(N.idLast), t.direct = e.num > 0 ? "in" : "out", et.init(t), W.codeHeight()
				},
				free: function (e) {
					_.idCur(e), X.toggleFree()
				},
				idCur: function (e) {
					var t = N.idCur,
						i = T.nMove = e.num;
					N.idLast2 = N.idLast, N.idLast = t, t += i, a.isLoop && (0 > i && 0 > t ? t = u - 1 : i > 0 && t >= u && (t = 0)), N.idCur = t, X.toggle(), R.pag && !R.pagList && e.isPagCenter && "touch" == R.ease && setTimeout(j.itemCenter, 10)
				},
				idCurDash: function (e) {
					var t = L.nBegin,
						i = t + e.num;
					!a.isLoop && e.num < 0 && 0 > i ? (e.num = -t, L.nBegin = 0) : !a.isLoop && e.num > 0 && i >= u ? (e.num = u - 1 - t, L.nBegin = u - 1) : L.nBegin += e.num;
					for (var n = L.nBegin, s = L.pBegin[n] + f; L.pEnd[n] < s;) n++;
					if (L.pEnd[n] > s && n--, n >= u && (n = u - 1), n < L.nBegin && (n = L.nBegin), L.nEnd = n, L.nEnd == u - 1) {
						for (var r = L.pEnd[u - 1] - f + L.mCanvas, o = u - 1; L.pBegin[o] >= r;) o--;
						L.nBegin = o + 1
					}
					N.idCur = e.num > 0 ? L.nEnd : L.nBegin
				},
				run: function (e, t, i, n) {
					var s = "dash" == a.layout ? L.nBegin : N.idCur;
					if (!R.lockNav && (!t || t && s != e)) {
						R.fxRun = 1, b.addClass(a.ns + "fxRun"), N.ev.trigger("fxBegin");
						var r = {
								num: e,
								isID: !!t,
								isLive: i,
								isPagCenter: n == S ? 1 : !!n
							},
							o = function () {
								if (r.isID ? 0 == r.num && N.ev.trigger("start") : (s + r.num == 0 || s + r.num - u == 0) && N.ev.trigger("start"), N.ev.trigger("before"), r.isID && (r.num -= s), "free" != a.layout) {
									var e;
									"touch" == R.ease && "touch" != R.easeLast ? e = a.easeTouch : "move" == R.ease && "move" != R.easeLast && (e = a.easeMove), e && (T.ease = X.easeName(e), R.easeLast = R.ease)
								}
								switch (a.layout) {
									case "dot":
										_.dot(r);
										break;
									case "line":
										_.line(r);
										break;
									case "dash":
										_.dash(r);
										break;
									case "free":
										_.free(r)
								}
							};
						"dash" != a.layout && T.$s.eq(s).data("is"), a.isSlideshow && gt && dt.go(), o()
					}
				},
				end: function () {
					R.fxRun = 0, b.removeClass(a.ns + "fxRun"), N.ev.trigger("fxEnd"), "dash" != a.layout && (N.ev.trigger("after"), N.idCur == u - 1 && N.ev.trigger("end")), a.isSlideshow && (R.hoverAction = 1, gt && dt.go())
				},
				swapHNative: function () {
					var e = N.idCur,
						t = a.ns + "hNative",
						i = R.ts || "css" != T.fxType[e] ? T.speed[e] : 400;
					n.hasClass(t) && n.removeClass(t), X.tc(A.dotHNative), A.dotHNative = setTimeout(function () {
						n.addClass(t)
					}, i + 10)
				}
			},
			K = {
				prevFn: function (e) {
					R.ease = "move", a.isLoop || !a.isLoop && N.idCur > 0 ? _.run(-e) : q.animRebound("prev")
				},
				nextFn: function (e) {
					R.ease = "move", a.isLoop || !a.isLoop && N.idCur < u - 1 ? _.run(e) : q.animRebound("next")
				},
				prev: function () {
					var e;
					if ("visible" == a.stepNav && "dash" == a.layout) {
						var t = L.nBegin - 1,
							i = f - L.mCanvas,
							n = 0;
						if (L.pEnd[t] < i) e = L.nBegin;
						else {
							for (; i >= n;) n += L.width[t--];
							e = L.nBegin - (t + 2)
						}
					} else e = a.stepNav;
					return K.prevFn(e), !1
				},
				next: function (e) {
					var t = e ? a.stepPlay : a.stepNav,
						i = "visible" == t && "dash" == a.layout ? L.nEnd - L.nBegin + 1 : t;
					return K.nextFn(i), !1
				},
				nav: function () {
					var e = T.ev.touch.end + " " + T.ev.click;
					r.add(o).off(e), r.on(e, function (e) {
						K.prev(), e.preventDefault()
					}), o.on(e, function (e) {
						K.next(), e.preventDefault()
					})
				},
				pag: function () {
					var t = T.ev.touch.end + " " + T.ev.click;
					T.$pagItem.off(t), T.$pagItem.on(t, function (t) {
						R.click && (R.ease = "move", _.run(e(this).data("id"), 1, 0, 1)), t.preventDefault()
					})
				},
				swipe: function (e) {
					var t = R.touchSupport,
						s = T.ev.mouse,
						r = T.ev.touch,
						o = {
							offSwipe: function (e) {
								e.removeClass(a.ns + "swipe-on").off(T.ev.mouse.start + " " + T.ev.touch.start)
							},
							offOnDoc: function () {
								$.off(T.ev.mouse.move + " " + T.ev.mouse.end + " " + T.ev.touch.move + " " + T.ev.touch.end), K.swipeDocON(s), t && K.swipeDocON(r)
							},
							offBody: function () {
								K._swipeEnd({}, R.swipeTypeCur, 1), this.offSwipe(n), R.nestedParent && this.offSwipe(T.$nestedChild)
							},
							offPag: function () {
								K._swipeEnd({}, R.swipeTypeCur, 1), R.pag && this.offSwipe(T.$pag)
							},
							onBody: function () {
								if (R.swipeBody && (this.offOnDoc(), this.offBody(), K.swipeON(n, i, s), t && K.swipeON(n, i, r), R.nestedParent)) {
									var e = t ? r.start + " " + s.start : s.start;
									T.$nestedChild.on(e, function () {
										R.nestedInner = 1
									})
								}
							},
							onPag: function () {
								R.swipePag && R.pag && (this.offOnDoc(), this.offPag(), K.swipeON(T.$pag, T.$pagInner, s), t && K.swipeON(T.$pag, T.$pagInner, r))
							}
						};
					void 0 == e ? (o.onBody(), o.onPag()) : o[e]()
				},
				swipeON: function (e, t, n) {
					e.addClass(a.ns + "swipe-on");
					var s = e.find("img");
					e.add(s).off(T.ev.drag);
					var r = a.swipe.isStopSelectText || e.is(T.$pag),
						o = r ? e : s;
					o.on(T.ev.drag, function () {
						return !1
					}), e.on(n.start, {
						swipeType: n.type
					}, function (e) {
						T.touchmove = null;
						var a = e.data.swipeType;
						if (null == R.swipeTypeCur && (R.swipeTypeCur = a), !R.move && !R.lockSwipe && R.swipeTypeCur == a) {
							T.tDrag0 = T.tDrag1 = +new Date, T.swipeCur = t, X.tsRemove(t);
							var n = X.sSwap(),
								s = "mouse" == a ? e : R.msGesture ? e.originalEvent : e.originalEvent.touches[0];
							k.x0 = k.x0Fix = k.pageX1 = s[n.pageX], k.y0 = s.pageY, k.offset = k.buffer = 0, k.buffer = n.xCanvas, R.move = 1, R.swipeBegin = 1, T.nSwipe = 0, T.nMoveEvent = 0, i.is(T.swipeCur) && X.toggleClass("grab", 0), "mouse" == a && r && e.preventDefault()
						}
					})
				},
				_swipeEnd: function (e, t, n) {
					R.move && !R.lockSwipe && R.swipeTypeCur == t && (!R.swipeBegin && N.ev.trigger("swipeEnd"), T.tDrag1 = +new Date, R.move = 0, setTimeout(function () {
						R.click = 1
					}, 10), q.nearX(), i.is(T.swipeCur) ? X.toggleClass("grab", 1) : X.toggleClass("grab", -1), a.isViewGrabStop && X.toggleClass("stop", -1), "touch" != t || n || e.preventDefault()), R.nestedParent && (R.nestedInner = 0), R.swipeTypeCur == t && (R.swipeTypeCur = null)
				},
				swipeDocON: function (e) {
					$.on(e.move, {
						swipeType: e.type
					}, function (e) {
						var t = e.data.swipeType;
						if (!(!R.move || R.lockSwipe || R.nestedParent && R.nestedInner || R.swipeTypeCur != t)) {
							!T.nMoveEvent && N.ev.trigger("swipeBegin"), T.nMoveEvent++;
							var a = "mouse" == t ? e : R.msGesture ? e.originalEvent : e.originalEvent.touches[0],
								n = X.sSwap();
							k.pageX0 = k.pageX1, k.pageX1 = a[n.pageX], k.pageX0 != k.pageX1 && (k.offset = k.pageX1 - k.x0, R.swipeNav = k.pageX1 > k.pageX0 ? "right" : "left", "touch" == t ? (k.y = X.a(k.y0 - a.pageY), null == T.touchmove && X.a(k.offset) >= k.y && (T.touchmove = "chieuX"), null == T.touchmove && k.y > 5 && (T.touchmove = "chieuY"), null == T.touchmove || "chieuX" == T.touchmove ? (e.preventDefault(), q.bufferX(k.pageX1)) : (R.androidNative || R.ie) && K._swipeEnd(e, t, 1)) : q.bufferX(k.pageX1)), !i.is(T.swipeCur) && X.toggleClass("grab", 0), X.a(k.offset) > 10 && R.click && (R.click = 0)
						}
					}), $.on(e.end, {
						swipeType: e.type
					}, function (e) {
						K._swipeEnd(e, e.data.swipeType, 0)
					})
				},
				click: function () {
					a.isPosReport && "dash" != a.layout ? n.on(T.ev.click + "Dev", function (e) {
						var t = e.pageX,
							a = e.pageY,
							i = T.$s.eq(N.idCur),
							n = i.offset().left,
							s = i.offset().top,
							r = T.pa.left ? T.pa.left : 0,
							o = t - n,
							l = a - s,
							d = (o - r) / T.rate,
							c = l / T.rate,
							u = "[ " + csVAR.codeName + ": x/y position (" + parseInt(o - r) + " ," + parseInt(l) + ")";
						u += T.rate < 1 ? " | x/y responsive (" + parseInt(d) + " ," + parseInt(c) + ")]" : "]", R.e && console.log(u)
					}) : n.off(T.ev.click + "Dev")
				},
				keyboard: function () {
					$.off(T.ev.key), a.isKeyboard && $.on(T.ev.key, function (e) {
						if (X.scroll.check(1), R.into) {
							var t = e.keyCode;
							37 == t ? K.prevFn(1) : 39 == t && K.nextFn(1)
						}
					})
				},
				mousewheel: function () {
					var t;
					n.off(T.ev.wheel), T.wheelDelta = 0, e.fn.mousewheel && a.isMousewheel && n.on(T.ev.wheel, function (e, a) {
						return t = T.wheelDelta, t += a / 2, -1 == a && -1 >= t ? (K.prevFn(1), t = 0) : 1 == a && t >= 1 && (K.nextFn(1), t = 0), T.wheelDelta = t, !1
					})
				},
				resize: function () {
					var e = function () {
						X.tc(A.resize), A.resize = setTimeout(function () {
							N.ev.trigger("resize"), !!a.showFrom && J.toggle(), a.isFullscreen && (p = T.hCode = I.height()), !R.showFrom || n.width() == f && n.height() == p || Y.resize()
						}, 100)
					};
					T.hWin = I.height(), I.off(T.ev.resize), I.on(T.ev.resize, e), clearInterval(A.resizeLoop), A.resizeLoop = setInterval(function () {
						var e = T.$s.eq(N.idCur).height(),
							t = n.width();
						(t != f || !R.fxRun && e != p) && Y.resize()
					}, 200)
				}
			},
			Y = {
				pagToggleFn: function (e, t) {
					if (R.pag && T.$pag) {
						var i = e ? a : M,
							n = i.pag,
							s = " " + a.ns,
							r = s + "pag-",
							o = "",
							l = "";
						a.pag.moreClass != M.pag.moreClass && (o += " " + n.moreClass), a.pag.type != M.pag.type && (o += s + n.type), a.pag.pos != M.pag.pos && (l += r + n.pos), a.pag.dirs != M.pag.dirs && n.dirs ? l += r + n.dirs : t && (l += "hor" == t.pagDirs ? e ? r + "hor" : r + "ver" : e ? r + "ver" : r + "hor"), o += " " + l, e ? T.$pag.addClass(o) : T.$pag.removeClass(o), "tab" == n.type && (e ? b.addClass(l) : b.removeClass(l))
					}
				},
				removeClass: function (e) {
					var t = " " + a.ns,
						i = t + "one" + t + "multi";
					i += t + "line" + t + "dot" + t + "dash", i += t + "height-auto" + t + "height-fixed", b.removeClass(i), Y.pagToggleFn(0, e)
				},
				addClass: function (e) {
					var t = " " + a.ns,
						i = t + a.layout + t + "height-" + a.height;
					R.ts || (i += t + "old"), R.showFrom || (i += t + "hide"), b.addClass(i), Y.pagToggleFn(1, e)
				},
				reset: function () {
					if ("dot" == a.layout) {
						var t = {};
						t[g] = "", T.$s.css(t), q.translateX(i, 0, 1, 1)
					}
					a.height0 != a.height && T.$s.each(function () {
						z.backCenter.reset(e(this))
					})
				},
				resize: function () {
					R.pag && !R.pagList && j.sizeItem(), W.wCode(), R.res && tt.varible(), "fixed" == a.height && W.codeHeightFix(), R.res && a.isFullscreen && at.varible(), z.backUpdate(), W.slideHeight(), W.general(), W.codeHeight(1), setTimeout(j.toHor, 40)
				}
			},
			J = {
				get: function () {
					if (a.showFrom) {
						if ("string" == typeof a.showFrom) {
							var e = a.showFrom;
							a.showFrom = [e]
						} else if ("number" == typeof a.showFrom) {
							var e = a.showFrom;
							a.showFrom = [e + "-100000"]
						}
						for (T.showFrom = {}, T.showFrom.num = a.showFrom.length, x = T.showFrom.num - 1; x >= 0; x--) {
							var t = [],
								i = a.showFrom[x];
							"number" == typeof i && (i += "-100000"), t = i.split("-"), T.showFrom[x] = {
								from: parseInt(t[0]),
								to: parseInt(t[1])
							}
						}
						J.check()
					} else R.showFrom = 1, R.awake = 1;
					R.show = R.mobile && "desktop" == a.show || !R.mobile && "mobile" == a.show ? 0 : 1
				},
				check: function () {
					var e = T.showFrom,
						t = I.width();
					for (R.showFrom = 0, x = e.num - 1; x >= 0; x--)
						if (t >= e[x].from && t <= e[x].to) {
							R.showFrom = 1;
							break
						}
					R.awake == S && R.showFrom && (R.awake = 1)
				},
				toggle: function () {
					J.check();
					var e = a.ns + "hide";
					R.showFrom || b.hasClass(e) || b.addClass(e), R.showFrom && b.hasClass(e) && b.removeClass(e)
				},
				resizeON: function () {
					var e = 200;
					b.addClass(a.ns + "hide"), I.on("resize.codeShow" + P, function () {
						X.tc(A.showResize), A.showResize = setTimeout(function () {
							J.check(), R.awake && J.resizeOFF()
						}, e)
					})
				},
				resizeOFF: function () {
					I.off("resize.codeShow" + P), b.removeClass(a.ns + "hide"), F.ready()
				}
			},
			Z = {
				toggle: function (t, i) {
					var n = t.data("html").cap,
						s = i.length ? i.data("html").cap : "",
						r = {
							duration: a.speedHeight,
							complete: function () {
								var t = e(this);
								t.is(T.$capLast) ? t.css("visibility", "") : t.is(T.$capInner) && t.css("height", "")
							}
						};
					T.$capCur.html(n);
					var o = T.$capCur.outerHeight(!0),
						l = T.$capLast.outerHeight(!0) || o;
					R.mobile || R.ie7 || (T.$capLast.html(s), T.$capCur.stop(!0).css("opacity", 0).animate({
						opacity: 1
					}, r), T.$capLast.stop(!0).css({
						opacity: 1,
						visibility: "visible"
					}).animate({
						opacity: 0
					}, r), o != l && T.$capInner.stop(!0).css("height", l).animate({
						height: o
					}, r))
				}
			},
			et = {
				array: function (e) {
					return "object" == typeof e ? e[X.r(X.rm(0, e.length - 1))] : e
				},
				init: function (e) {
					var t, i = N.idCur,
						n = T.fx[i],
						s = T.fxType[i];
					"js" == s ? (t = "random" == n ? a.fxName[X.r(X.rm(1, T.fxNum - 1))] : n, t = et.array(t), "fade" == t ? et[t](e) : (e.$tar = e.$sCur.find("." + a.ns + "imgback"), e.$tar.length && et[t] ? et[t](e) : et.end())) : R.ts ? et.css() : et.jFade(0)
				},
				end: function (e) {
					X.tc(A.fxEnd), A.fxEnd = setTimeout(function () {
						e && (e.d.is && e.$tar.find("img").css("visibility", ""), e.$fxOver.remove()), _.end()
					}, T.speed[N.idCur])
				},
				css: function () {
					var e = "code",
						t = N.idCur,
						i = N.idLast,
						s = "cssOne" == T.fxType[t],
						r = " " + e + "-animated",
						o = a.ns + "noclip",
						l = s ? "tiRemoveCSSOne" : "tiRemoveCSS",
						d = "fxAdded",
						c = T.speed[t],
						u = {},
						p = {},
						f = T.fxEase[t],
						h = T.prefix + "animation-timing-function",
						g = {},
						m = e + "-slide",
						v = m + "In",
						w = m + "Out";
					u[C] = c + "ms", g[h] = f ? f : "", p[C] = "", p[h] = "";
					var y = function (e, t) {
						var a, i, n = T.$s.eq(e);
						s ? (a = t ? v : w, i = t ? w : v) : (a = T.fx[e][t ? 0 : 1] || "", i = n.data(d) || "", a = et.array(a), n.data("fxAdded", a)), X.tc(n.data(l)), n.css(u), n.removeClass(i).css(g).addClass(a + r), n.data(l, setTimeout(function () {
							n.removeClass(a + r).css(p)
						}, c))
					};
					y(i, 0), y(t, 1);
					var x, b;
					if (s) {
						var I = e + "fx-",
							x = I + et.array(T.fx[t]),
							b = n.data(d),
							$ = T.nMove > 0,
							L = $ ? m + "Next" : m + "Prev",
							k = $ ? m + "Prev" : m + "Next";
						x = o + " " + x + " " + L, b = b + " " + k, n.data("fxAdded", x)
					} else x = o, b = "";
					X.tc(n.data(l)), n.removeClass(b).addClass(x), n.data(l, setTimeout(function () {
						n.removeClass(x)
					}, c));
					var R = N.idLast2;
					if (R != S && R != t) {
						var A = T.$s.eq(R),
							D = s ? w : A.data(d) || "";
						X.tc(A.data(l)), A.removeClass(D + r).css(p)
					}
					et.end()
				},
				jFade: function (e) {
					var t = N.idCur,
						a = {
							visibility: ""
						},
						i = function (i, n) {
							var s = T.$s.eq(i),
								r = n ? 0 : 1,
								o = n ? 1 : 0;
							s.stop(!0).css({
								opacity: r,
								visibility: "visible"
							}).animate({
								opacity: o
							}, {
								duration: e ? T.speed[t] : 250,
								complete: function () {
									s.css(a)
								}
							})
						};
					i(N.idLast, 0), i(t, 1);
					var n = N.idLast2;
					n != S && n != t && T.$s.eq(n).stop(!0).css(a), et.end()
				},
				fade: function () {
					et.jFade(1)
				}
			},
			tt = {
				valueGet: function (e, t) {
					var a = $.width(),
						i = t ? t : "value",
						n = 1e5,
						s = -1;
					for (x = e.num - 1; x >= 0; x--) e[x].from <= a && a <= e[x].to && n >= e[x].to && (n = e[x].to, s = x);
					return s > -1 ? e[s][i] : null
				},
				varible: function () {
					var e = function () {
						var e;
						return T.paRange ? (e = tt.valueGet(T.paRange), null == e && (e = 0)) : e = 0, e
					};
					if (a.media) {
						var t = T.media.wMax,
							i = t > T.wRes ? t >= f : T.wRes > f;
						if (i) {
							var n = T.media,
								s = tt.valueGet(n);
							T.pa.left = null == s ? e() : (f - s) / 2
						} else T.pa.left = (f - T.wRes) / 2
					} else T.pa.left = T.wRes > f ? e() : (f - T.wRes) / 2;
					T.pa.left = ~~T.pa.left, W.margin(), T.rateLast = T.rate;
					var r = (f - 2 * T.pa.left) / T.wRes;
					T.rate = r > 1 ? 1 : r
				}
			},
			at = {
				varible: function () {
					T.wContent = f - 2 * T.pa.left, T.hContent = X.r(T.wContent / T.rRes), T.hContent < p ? T.pa.top = X.r((p - T.hContent) / 2) : (T.pa.top = 0, T.hContent = p, T.wContent = X.r(T.hContent * T.rRes), T.rate = T.wContent / T.wRes, T.pa.left = X.r((f - T.wContent) / 2))
				}
			},
			it = {
				prop: function () {
					var e = "[data-" + csVAR.codeData + "]",
						t = T.$nestedChild = b.find(e),
						a = T.$nestedParent = b.parent().closest(e);
					R.nestedParent = !!t.length, R.nestedChild = !!a.length
				},
				autoInit: function (e) {
					var t = e.find("." + csVAR.codeClass);
					csPLUGIN.AUTORUN(t)
				},
				destroy: function (e) {
					var t = e.find("." + csVAR.codeClass);
					if (t.length) {
						var a = t.data(csVAR.codeName);
						"object" == typeof a && a.destroy(!0)
					}
				}
			},
			nt = {
				filter: function (e) {
					var t = "";
					return e.classAdd != S && (t = e.classAdd.toString()), t
				},
				toggle: function () {
					var e = T.classAdd[N.idLast],
						t = T.classAdd[N.idCur];
					e != S && "" != e && b.removeClass(e), t != S && "" != t && b.addClass(t)
				}
			},
			st = {
				prev: function () {
					K.prev()
				},
				next: function () {
					K.next()
				},
				first: function () {
					_.run(0, 1)
				},
				last: function () {
					_.run(u - 1, 1)
				},
				goTo: function (e) {
					e >= 0 && u > e && _.run(e, 1)
				},
				play: function () {
					gt && (a.isSlideshow ? !R.stop || R.playing || R.fxRun ? dt.play() : (R.stop = 0, dt.reset()) : (a.isSlideshow = 1, dt.init()))
				},
				pause: function () {
					gt && (dt.pause(), a.slideshow.isPlayPause && T.$playpause.addClass(a.ns + a.actived))
				},
				stop: function () {
					gt && (R.stop || (R.stop = 1, dt.pause(1)))
				},
				prop: function (t, i, n) {
					M = e.extend(!0, {}, a), a = e.extend(!0, a, t), !!R.awake && !i && N.refresh(n)
				},
				refresh: function (e) {
					Y.removeClass(e), H.code(e), H.slide(), X.toggle(), Y.reset(), Y.resize(), V.refresh(), K.swipe(), K.keyboard(), K.mousewheel(), pt && rt.events(), gt && dt.update()
				},
				destroy: function (e) {
					K.swipe("offBody"), K.swipe("offPag");
					var t = T.ev.touch.end + " " + T.ev.click;
					a.isNav && r.add(o).off(t), a.isPag && T.$pagItem.off(t), $.off(T.ev.key), n.off(T.ev.wheel), clearInterval(A.resizeLoop), I.off(T.ev.resize), clearInterval(A.timer), I.off(T.ev.scroll), this.stop(), b.removeData(csVAR.codeName), e && (a.isNav && s.remove(), a.isPag && T.$pag.remove(), a.isCap && c.remove(), a.isSlideshow && (R.timer && T.$timer.remove(), a.slideshow.isPlayPause && T.$playpause.remove(), !!l && l.remove()), b.remove())
				},
				width: function () {
					return f
				},
				height: function () {
					return p
				},
				curId: function () {
					return N.idCur
				},
				slideLength: function () {
					return u
				},
				slideCur: function () {
					return T.$s.eq(N.idCur)
				},
				slideAll: function () {
					return $s
				},
				opts: function () {
					return a
				},
				varible: function () {
					return T
				},
				browser: function () {
					return R.browser
				},
				isMobile: function () {
					return R.mobile
				},
				ev: e(E, {
					"class": "code-event"
				})
			};
		O.M = X, O.PROP = H, O.RENDER = V, O.LOAD = G, O.EVENTS = K, O.SLIDETO = _, O.NESTED = it;
		var rt = e.extend({}, csPLUGIN.DEEPLINKING, O),
			ot = e.extend({}, csPLUGIN.COOKIE, O),
			lt = e.extend({}, csPLUGIN.AJAX, O),
			dt = e.extend({}, csPLUGIN.SLIDESHOW, O),
			ct = e.extend({}, csPLUGIN.TIMER, O),
			ut = e.extend({}, csPLUGIN.APImore, O),
			pt = !!csPLUGIN.DEEPLINKING,
			ft = !!csPLUGIN.COOKIE,
			ht = !!csPLUGIN.AJAX,
			gt = !!csPLUGIN.SLIDESHOW,
			mt = !!csPLUGIN.TIMER;
		N = e.extend(N, st, ut), e.data(t[0], csVAR.codeName, N), F.check()
	}, e.fn[csVAR.codeName] = function () {
		var t = arguments,
			a = csVAR.codeName;
		return e(this).each(function () {
			var i = e(this),
				n = i.data(a);
			if (void 0 === t[0] && (t[0] = {}), "object" == typeof t[0])
				if (n) n.prop(t[0]);
				else {
					var s = e.extend(!0, {}, e.fn[a].defaults, t[0]);
					new e[a](i, s)
				}
			else try {
				n[t[0]](t[1])
			} catch (r) {
				"object" == typeof console && console.warn("[" + a + ": function not exist!]")
			}
		})
	}, window[csVAR.codeName] = function () {
		var t = arguments,
			a = csVAR.codeName,
			i = e(t[0]);
		if (1 === i.length) {
			t[1] === UNDEFINED && (t[1] = {});
			var n = e.extend(!0, {}, e.fn[a].defaults, t[1]);
			return i.data(a) || new e[a](i, n), i.data(a)
		}
	}, csPLUGIN.AUTORUN = function (t) {
		t.length && t.each(function () {
			var t = e(this),
				a = t.data(csVAR.codeData),
				i = "isAutoRun-";
			void 0 != a && "" !== a && (-1 != a.indexOf(i + "true") || -1 != a.indexOf(i + "on") || -1 != a.indexOf(i + "1")) && !t.data(csVAR.codeName) && t[csVAR.codeName]()
		})
	}, e(document).ready(function () {
		csPLUGIN.AUTORUN(e("." + csVAR.codeClass))
	}), e.fn[csVAR.codeName].defaults = {
		ns: null,
		canvasName: "canvas",
		canvasTag: "div",
		viewportName: "viewport",
		slideName: "slide",
		navName: "nav",
		nextName: "next",
		prevName: "prev",
		playName: "playpause",
		pagName: "pag",
		capName: "cap",
		timerName: "timer",
		layerName: "layer",
		overlayName: "overlay",
		shadowName: "shadow",
		imgName: "img",
		lazyName: "src",
		name: null,
		dataSlide: "slide",
		current: "cur",
		thumbWrap: "thumbitem",
		actived: "actived",
		inActived: "inactived",
		layout: "dot",
		view: "basic",
		fx: null,
		fxDefault: "rectRun",
		fxOne: null,
		fxIn: null,
		fxOut: null,
		fxEasing: null,
		fxMobile: null,
		height: "auto",
		imgWidth: "none",
		imgHeight: "none",
		img: "none",
		dirs: "hor",
		easeTouch: "easeOutQuint",
		easeMove: "easeOutCubic",
		speed: 400,
		speedHeight: 400,
		speedMobile: null,
		layerSpeed: 400,
		layerStart: 400,
		perspective: 800,
		slot: "auto",
		stepNav: "visible",
		stepPlay: 1,
		responsive: null,
		media: null,
		padding: 0,
		margin: 0,
		hCode: null,
		wSlide: 1,
		idBegin: 0,
		show: "all",
		showFrom: 0,
		offsetBy: null,
		isCenter: 1,
		isNav: 0,
		isPag: 1,
		isCap: 0,
		isLayerRaUp: 1,
		isSlideshow: 0,
		isSwipe: 1,
		isMousewheel: 0,
		isLoop: 1,
		isAnimRebound: 1,
		isKeyboard: 0,
		isOverlay: 0,
		isShadow: 0,
		isViewGrabStop: 0,
		isMarginCut: 1,
		isPagSmooth: 1,
		isFullscreen: 0,
		isDeeplinking: 0,
		isCookie: 0,
		combine: {},
		load: {
			preload: 1,
			amountEachLoad: 2,
			isNearby: 0,
			nNearby: 0
		},
		swipe: {
			isMobile: 1,
			isBody: 0,
			isBodyOnMobile: 0,
			isStopSelectText: 1
		},
		className: {
			grab: ["grab", "grabbing"],
			swipe: ["", "swiping"],
			stop: ["left", "right"]
		},
		fxName: ["random", "fade", "move", "rectMove", "rectRun", "rectSlice", "rubyFade", "rubyMove", "rubyRun", "rubyScale", "zigzagRun"],
		pag: {
			type: "tab",
			width: null,
			height: null,
			dirs: "hor",
			pos: "top",
			align: "begin",
			speed: 300,
			ease: "easeOutCubic",
			sizeAuto: null,
			moreClass: null,
			isActivedCenter: 0,
			wMinToHor: 0,
			mediaToHor: null
		},
		slideshow: {
			delay: 8e3,
			timer: "arc",
			isAutoRun: 1,
			isPlayPause: 1,
			isTimer: 1,
			isHoverPause: 0,
			isRunInto: 1,
			isRandom: 0
		},
		arc: {
			width: null,
			height: null,
			fps: 24,
			rotate: 0,
			radius: 14,
			weight: 2,
			stroke: "#fff",
			fill: "transparent",
			oRadius: 14,
			oWeight: 2,
			oStroke: "hsla(0,0%,0%,.2)",
			oFill: "transparent"
		},
		markup: {
			timerInto: "media",
			playInto: "media"
		},
		deeplinking: {
			prefixDefault: ["code", "slide"],
			prefix: null,
			isIDConvert: 1
		},
		cookie: {
			name: "",
			days: 7
		},
		layoutFall: "line",
		fName: "sl",
		fLoop: 1,
		isInOutBegin: 0,
		isClassRandom: 0,
		isSlAsPag: 0,
		isPosReport: 0,
		rev: ["erp"]
	}, e.extend(jQuery.easing, {
		easeOutQuad: function (e, t, a, i, n) {
			return -i * (t /= n) * (t - 2) + a
		},
		easeOutQuint: function (e, t, a, i, n) {
			return i * ((t = t / n - 1) * t * t * t * t + 1) + a
		},
		easeInCubic: function (e, t, a, i, n) {
			return i * (t /= n) * t * t + a
		},
		easeOutCubic: function (e, t, a, i, n) {
			return i * ((t = t / n - 1) * t * t + 1) + a
		}
	})
}(jQuery),
function (e) {
	window.csPLUGIN || (window.csPLUGIN = {}), csPLUGIN.DEEPLINKING = {
		check: function (e) {
			var t, a = this.va,
				n = this.is,
				s = this.o.deeplinking,
				r = s.prefixDefault[0] + a.codeID + s.prefixDefault[1],
				o = null != s.prefix ? s.prefix : r,
				l = o + "\\d+",
				d = new RegExp(l, "g"),
				c = window.location.hash,
				u = c.match(d),
				p = function () {
					if (n.aIDtext)
						for (i = 0; i < a.aIDtext.length; i++) {
							var e = a.aIDtext[i];
							if (void 0 != e && -1 != c.indexOf(e.toString())) return i
						}
					return null
				};
			if (e) return t = p(), null != t ? t : null != u && (t = this.M.pInt(u[0].substr(o.length)), t < this.cs.num) ? t : null;
			var f = null,
				h = null;
			t = p(), null != t && (h = a.aIDtext[t]), null == h && null != u && (h = u[0]);
			var g = a.aIDtext[this.cs.idCur];
			if (n.aIDtext && void 0 != g && (f = g), null == f && (f = o + this.cs.idCur), null != h) {
				var m = c.split(h);
				c = m[0] + f + m[1]
			} else "" === c ? c = "#" + f : c += /\-$/.test(c) ? f : "-" + f;
			return c
		},
		read: function () {
			var e = this.check(1);
			null != e && (this.cs.idCur = this.o.idBegin = e, this.PROP.setup())
		},
		write: function () {
			var e = this,
				t = e.ti,
				a = e.check(0),
				i = function () {
					e.M.tc(t.hashReset), t.hashReset = setTimeout(function () {
						csVAR.stopHashChange = 0
					}, 100)
				};
			e.M.tc(t.hashChange), t.hashChange = setTimeout(function () {
				csVAR.stopHashChange = 1, history.pushState ? history.pushState(null, null, a) : window.location.hash = a, i()
			}, e.va.speed[e.cs.idCur])
		},
		events: function () {
			var t = this;
			e(window).off(t.va.ev.hash), t.o.isDeeplinking && e(window).on(t.va.ev.hash, function (e) {
				if (e.preventDefault(), !csVAR.stopHashChange) {
					var a = t.check(1);
					null != a && t.SLIDETO.run(a, 1, 0, 1)
				}
			})
		}
	}
}(jQuery),
function () {
	window.csPLUGIN || (window.csPLUGIN = {}), csPLUGIN.COOKIE = {
		write: function () {
			var e = new Date,
				t = "code" + this.va.codeID + this.o.cookie.name + window.location.host;
			e.setTime(e.getTime() + 24 * this.o.cookie.days * 60 * 60 * 1e3);
			var a = "; expires=" + e.toGMTString();
			document.cookie = t + "=" + this.cs.idCur + a + "; path=/"
		},
		read: function () {
			var e = document.cookie.replace(/\s+/g, "").split(";"),
				t = "code" + this.va.codeID + this.o.cookie.name + window.location.host + "=",
				a = null;
			for (i = 0; i < e.length; i++) 0 == e[i].indexOf(t) && (a = this.M.pInt(e[i].substr(t.length)));
			null != a && (this.cs.idCur = this.o.idBegin = a)
		}
	}
}(jQuery),
function (e) {
	window.csPLUGIN || (window.csPLUGIN = {}), csPLUGIN.SLIDESHOW = {
		init: function () {
			this.cs.num > 1 && (this.is.hoverAction = 0, this.focus(), this.M.scroll.setup(), this.hover(), this.o.slideshow.isPlayPause && this.toggle(), this.is.stop = 0, this.go())
		},
		go: function () {
			var e = this,
				t = e.is;
			t.stop || (t.pauseActive ? e.pause() : !t.focus || !t.into || t.hover || e.va.nVideoOpen || e.va.nMapOpen || !e.o.slideshow.isHoverPause && t.fxRun ? t.playing && e.pause() : t.fxRun || (t.hoverAction ? e.reset() : e.play()))
		},
		update: function () {
			var t = this.oo,
				a = this.o,
				i = this.va,
				n = this.is,
				s = this.ti,
				r = e.extend({}, csPLUGIN.TIMER, this),
				o = t.slideshow,
				l = a.slideshow;
			if (o.timer != l.timer && (clearInterval(s.timer), this.RENDER.timer(), !!i.tTimer0 && this.pause(), this.play()), n.timer && "arc" == i.timer && !!csPLUGIN.TIMER && r.arcProp(), t.isSlideshow != a.isSlideshow)
				if (a.isSlideshow) this.init();
				else {
					this.pause(1);
					var d = " focus.code" + i.codekey + " blur.code" + i.codekey + " scroll.code" + i.codekey;
					e(window).off(d), i.$cs.off("mouseenter.code mouseleave.code")
				}
			o.isHoverPause != l.isHoverPause && this.hover()
		},
		play: function () {
			var t = this,
				a = t.va,
				i = t.is,
				n = t.ti,
				s = t.cs,
				r = t.o,
				o = e.extend({}, csPLUGIN.TIMER, t),
				l = function () {
					t.M.tc(n.play), n.play = setTimeout(t.reset, a.speed[s.idCur] + 10)
				};
			i.playing = 1, a.tTimer0 = +new Date, i.timer && !!csPLUGIN.TIMER && o[a.timer + "Update"](), t.M.tc(n.play), n.play = setTimeout(function () {
				var e = s.num,
					i = r.slideshow.isRandom && e > 2,
					n = "dash" == r.layout ? t.ds.nEnd : s.idCur,
					o = i ? t.M.raExcept(0, e - 1, n) : n >= e - 1 ? 0 : n + 1,
					d = a.$s.eq(o);
				d.data("is").loaded ? (i ? t.SLIDETO.run(o, 1) : r.isLoop || n != e - 1 ? t.EVENTS.next(1) : t.SLIDETO.run(0, 1), l()) : (d.data({
					isPlayNext: 1
				}), s.stop())
			}, a.tDelay)
		},
		reset: function () {
			var e = this.va;
			e.tDelay != e.delay[this.cs.idCur] && (e.tDelay = e.delay[this.cs.idCur]), "bar" == e.timer && 100 != e.xTimer ? e.xTimer = 100 : "number" == e.timer && 0 != e.xTimer ? e.xTimer = 0 : "arc" == e.timer && (e.arc.angCur = 0), this.play()
		},
		pause: function (t) {
			var a = this,
				i = a.va,
				n = a.is,
				s = a.cs.idCur,
				r = !!csPLUGIN.TIMER,
				o = e.extend({}, csPLUGIN.TIMER, a);
			if (n.playing = 0, n.hoverAction = 0, t) i.tDelay = i.delay[s], r && o[i.timer + "Setup"];
			else {
				var l = i.tDelay;
				i.tTimer1 = +new Date, i.tDelay = i.delay[s] - (i.tTimer1 - i.tTimer0), i.delay[s] != l && (i.tDelay -= i.delay[s] - l), i.tDelay < 0 && (i.tDelay = 0, n.hoverAction = 1)
			}
			n.timer && r && o.stop(), a.M.tc(a.ti.play)
		},
		focus: function () {
			var t = this,
				a = t.is,
				i = ".code" + t.va.codekey;
			a.focus = 1, e(window).on("focus" + i, function () {
				a.focus || (a.focus = 1, t.go())
			}).on("blur" + i, function () {
				a.focus && (a.focus = 0, t.go())
			})
		},
		hover: function () {
			var e = this,
				t = e.va.$cs;
			e.o.slideshow.isHoverPause ? (e.is.hover = 0, t.off("mouseenter.code mouseleave.code").on("mouseenter.code", function () {
				e.hover1()
			}).on("mouseleave.code", function () {
				e.hover0()
			})) : t.off("mouseenter.code mouseleave.code")
		},
		hover0: function () {
			this.is.hover = 0, this.go()
		},
		hover1: function () {
			this.is.hover = 1, this.go()
		},
		toggle: function () {
			var e = this,
				t = e.o,
				a = e.va,
				i = t.ns + t.actived,
				n = a.ev.click;
			a.$playpause.off(n), a.$playpause.on(n, function () {
				return a.$playpause.hasClass(i) ? (e.is.pauseActive = 0, a.$playpause.removeClass(i)) : (e.is.pauseActive = 1, a.$playpause.addClass(i)), e.go(), !1
			})
		}
	}
}(jQuery),
function (e) {
	window.csPLUGIN || (window.csPLUGIN = {}), csPLUGIN.TIMER = {
		render: function () {
			var t = this.o,
				a = this.va,
				i = this.is;
			if (!!a.$timer && a.$timer.remove(), i.timer) {
				var n = t.ns + t.timerName,
					s = n + "-" + a.timer,
					r = "<div></div>",
					o = this.RENDER.searchDOM("." + n);
				o.length ? a.$timer = o.addClass(s) : (a.$timer = e(r, {
					"class": n + " " + s
				}), this.RENDER.into(t.markup.timerInto, a.$timer)), "bar" == a.timer ? (a.$timerItem = e(r, {
					"class": n + "item"
				}), a.$timer.append(a.$timerItem), this.barSetup()) : "arc" == a.timer ? (a.$timerItem = e("<canvas></canvas>"), a.$timer.append(a.$timerItem), this.arcProp()) : "number" == a.timer && (a.$timerItem = e("<span></span>", {
					"class": n + "item",
					"data-num": 0,
					text: 0
				}), a.$timer.append(a.$timerItem))
			}
		},
		barSetup: function () {
			var e = this.va,
				t = {};
			if (t[e.cssTf] = this.M.tlx(-100, "%"), this.is.ts) {
				var a = {};
				a = this.M.ts(e.cssTf, 0, "linear"), e.$timerItem.css(a).css(t)
			} else e.$timerItem.css(t)
		},
		arcSetup: function () {},
		numberSetup: function () {
			this.va.$timerItem.attr("data-num", 0).text(0)
		},
		noneSetup: function () {},
		barUpdate: function () {
			var e = this,
				t = e.va,
				a = e.is,
				i = function () {
					var i = {};
					i[t.cssTf] = e.M.tlx(-t.xTimer, "%"), a.ts ? (t.$timerItem.hide().show(), t.$timerItem.css(t.cssD0).css(i)) : t.$timerItem.css(i)
				},
				n = function () {
					var i = {};
					if (i[t.cssTf] = e.M.tlx(0), a.ts) {
						var n = {};
						n[t.cssD] = t.tDelay + "ms", t.$timerItem.hide().show(), t.$timerItem.css(n), setTimeout(function () {
							t.$timerItem.css(i)
						}, 50)
					} else t.$timerItem.animate(i, {
						duration: t.tDelay,
						easing: "linear"
					})
				};
			i(), setTimeout(n, 20)
		},
		arcUpdate: function () {
			var e = this.va,
				t = this.ti,
				a = Math.ceil(360 * e.arc.speed / e.delay[this.cs.idCur]),
				i = function () {
					var i = e.tContext,
						n = e.arc,
						s = Math.ceil((n.radius - n.weight) / 2);
					i.clearRect(-n.width / 2, -n.height / 2, n.width, n.height), i.beginPath(), i.arc(0, 0, n.oRadius, 0, 360 * n.pi, !1), i.lineWidth = n.oWeight, i.strokeStyle = n.oStroke, i.fillStyle = n.oFill, i.stroke(), i.fill(), i.beginPath(), i.arc(0, 0, s + 1, 0, n.pi * Math.ceil(10 * n.angCur) / 10, !1), i.lineWidth = 2 * s + 2, i.strokeStyle = n.fill, i.stroke(), i.beginPath(), i.arc(0, 0, n.radius, 0, n.pi * n.angCur, !1), i.lineWidth = n.weight, i.strokeStyle = n.stroke, i.stroke(), e.arc.angCur += a, e.arc.angCur > 370 && clearInterval(t.timer)
				};
			i(), clearInterval(t.timer), t.timer = setInterval(i, e.arc.speed)
		},
		numberUpdate: function () {
			var e = this,
				t = e.va,
				a = 100,
				i = function () {
					t.tDelay -= a, t.xTimer0 = t.xTimer, t.xTimer = 100 - t.tDelay / t.delay[e.cs.idCur] * 100, t.xTimer = Math.round(t.xTimer), t.xTimer > 100 && (t.xTimer = 0), t.xTimer0 != t.xTimer && t.$timerItem.attr("data-num", t.xTimer).text(t.xTimer)
				};
			clearInterval(e.ti.timer), e.ti.timer = setInterval(i, a)
		},
		noneUpdate: function () {},
		stop: function () {
			var e = this.va,
				t = this.ti;
			if ("bar" == e.timer) {
				e.xTimer = e.tDelay / e.delay[this.cs.idCur] * 100;
				var a = {};
				a[e.cssTf] = this.M.tlx(-e.xTimer, "%"), this.is.ts ? e.$timerItem.css(e.cssD0).css(a) : e.$timerItem.stop(!0).css(a)
			} else "arc" == e.timer ? (e.arc.angCur = 360 - e.tDelay / e.delay[this.cs.idCur] * 360, clearInterval(t.timer)) : "number" == e.timer && clearInterval(t.timer)
		},
		arcProp: function () {
			var t = this.va,
				a = this.o,
				i = {
					angCur: t.arc && t.arc.angCur ? t.arc.angCur : 0,
					pi: Math.PI / 180,
					width: null == a.arc.width ? t.$timer.width() : a.arc.width,
					height: null == a.arc.height ? t.$timer.height() : a.arc.height,
					speed: ~~(1e3 / a.arc.fps)
				};
			t.arc = e.extend(a.arc, i), t.$timerItem.attr({
				width: t.arc.width,
				height: t.arc.height
			}), t.tContext = t.$timerItem[0].getContext("2d");
			var n = function () {
				var e = t.tContext;
				e.setTransform(1, 0, 0, 1, 0, 0), e.translate(t.arc.width / 2, t.arc.height / 2), e.rotate(-t.arc.pi * (90 - t.arc.rotate)), e.strokeStyle = t.arc.stroke, e.fillStyle = t.arc.fill, e.lineWidth = t.arc.weight
			};
			n()
		}
	}
}(jQuery),
function (e) {
	window.csPLUGIN || (window.csPLUGIN = {}), csPLUGIN.AJAX = {
		check: function (e, t) {
			var a = t.data("is");
			e.media && "string" == typeof e.media.ajax && (a.ajax = 1)
		},
		removeAutoLoad: function (e) {
			var t = [];
			for (i = 0; i < e.length; i++) {
				var a = this.va.$s.eq(i).data("is");
				a.ajax || t.push(e[i])
			}
			return t
		},
		get: function (t) {
			var a = this,
				i = t.data("media").ajax,
				n = t.data("is"),
				s = function () {
					n.loadBy = "ajax", a.LOAD.slideBegin(t)
				},
				r = {
					type: "GET",
					cache: !1,
					beforeSend: function () {
						n.loading = 1
					},
					success: function (e) {
						t.html(t.html() + e);
						var i = t.find("." + a.o.ns + "loader");
						i.length && (t.data("$").slLoader = i), s()
					},
					error: function () {
						n.loaded = 0, s()
					}
				};
			e.ajax(i, r)
		}
	}
}(jQuery),
function (e) {
	window.csPLUGIN || (window.csPLUGIN = {}), csPLUGIN.APImore = {
		indexParse: function (e, t) {
			var a = this.num;
			return /^\-?\d+/g.test(e) && (e = parseInt(e)), "number" == typeof e && e >= 0 && a > e || (e = t ? a : a - 1), e
		},
		fnAddSlide: function (t, a) {
			var i = this,
				n = i,
				s = i.o,
				r = i.va,
				o = i.is,
				l = e(t),
				d = 1 == l.length && "div" == l[0].tagName.toLowerCase(),
				c = d ? l : e("<div></div>", {
					html: t
				});
			c = i.RENDER.slide(c), a = i.indexParse(a, 1);
			var u = a == n.num;
			if (u ? r.$canvas.append(c) : (r.$s.eq(a).before(c), r.$s = r.$canvas.children("." + s.ns + s.slideName)), o.pag) {
				i.RENDER.capPagHTML(c);
				var p = i.RENDER.pagitem(c);
				u ? r.$pagInner.append(p) : (r.$pagItem.eq(a).before(p), r.$pagItem = r.$pagInner.children("." + s.ns + "pagitem")), i.EVENTS.pag()
			}
			a == n.idCur && (n.idLast = n.idCur + 1), s.load.isNearby ? n.refresh() : (o.apiAdd = 1, i.PROP.code(), i.PROP.slide(), c.data("is").loadBy = "apiAdd", i.LOAD.slideBegin(c)), i.NESTED.autoInit(c)
		},
		getFromURL: function (t, a) {
			var i = this,
				n = {
					type: "GET",
					cache: !1,
					crossDomain: !0,
					success: function (e) {
						i.fnAddSlide(e, a)
					},
					error: function () {
						i.is.e && console.warn("[" + csVAR.codeName + ": ajax load failed] -> " + t)
					}
				};
			e.ajax(t, n)
		},
		addSlide: function (t, a) {
			var i = this,
				n = function (e) {
					i.fnAddSlide(e, a)
				};
			"string" == typeof t && "" != t ? n(t) : "object" == typeof t && (void 0 != t.ajax && "string" == typeof t.ajax ? i.getFromURL(t.ajax, a) : void 0 != t.selector && "object" == typeof t.selector ? n(t.selector) : void 0 != t.html && "string" == typeof t.html && n(e(html)))
		},
		removeSlide: function (e) {
			var t = this,
				a = this.o,
				i = this.va,
				n = this.is;
			if (t.num > 1) {
				e = this.indexParse(e, 0);
				var s = i.$s.eq(e);
				t.idCur == t.num - 1 && (t.idCur = t.num - 2), this.NESTED.destroy(s), s.remove(), i.$s = i.$canvas.children("." + a.ns + a.slideName), n.pag && (i.$pagItem.eq(e).remove(), i.$pagItem = i.$pag.find("." + a.ns + "pagitem")), n.apiRemove = 1, t.prop(), n.apiRemove = 0
			}
		},
		swipeEvent: function (e) {
			"string" == typeof e && -1 != "onBody onPag offBody offPag".indexOf(e) && this.EVENTS.swipe(e)
		}
	}
}(jQuery);
/*NAV SUPPORT*/
jQuery(function ($) {
	$('ul.dropdown-menu [data-toggle=dropdown]').on('click', function (event) {
		// Avoid following the href location when clicking
		event.preventDefault();
		// Avoid having the menu to close when clicking
		event.stopPropagation();
		// If a menu is already open we close it
		$(this).parent().toggleClass('open');
	});
})

/*LANGUAGE, SEARCH TOGGLE, MOBILE NAV*/
jQuery(function ($) {

	$('#mobileNav .button-toggle').on('click', function (e) {
		e.preventDefault();

		$(this).toggleClass('active');
		$('#mobileNavArea').toggle();
	});

	$('#languageSelection .button-toggle').on('click', function (e) {
		e.preventDefault();

		if (!$(this).hasClass('open')) {
			closeDropDownsTopBar();
			closeMobileMainNav();
		}

		$(this).toggleClass('open');
		$('#languageSelection .language-list').toggle();
	});

	$('#search .button-toggle').on('click', function (e) {
		e.preventDefault();

		if (!$(this).hasClass('open')) {
			closeDropDownsTopBar();
			closeMobileMainNav();
		}

		$(this).toggleClass('open');
		$('#search-dropdown').toggle();
		$("#search-dropdown .searchfield").focus();
	});

	$(' #languageSelection .button-toggle, #languageSelection .language-list, #search .button-toggle, #search-dropdown').on('click', function (e) {
		e.stopPropagation();
	});

	$('html').on('click', function () {
		closeDropDownsTopBar();
	})

	function closeDropDownsTopBar() {
		$('#topbar .button-toggle').removeClass('open');
		$('#topbar .dropdown-box').hide();
	}

	function closeMobileMainNav() {
		$('#mobileNav .button-toggle').removeClass('active');
		$('#mobileNavArea').hide();
	}

	addScollbarMainNav();
});
/*Language maxHeight for Scolling*/

function addScollbarMainNav() {

	var maxHeightWindow = $(window).height() - 60;

	var target = $('#mainNavi > .level1 > li:first-child > ul');

	//$('#mainNavi > .level1 > li:first-child > ul').css({
	$(target).css({
		'overflow-y': 'auto'
		//'position': 'absolute'
	});

	$('.language-list, #mainNavi > .level1 > li:first-child > ul').css({
		'max-height': maxHeightWindow
	});

	$('.language-list, #mainNavi > .level1 > li:first-child > ul').css({
		'height': maxHeightWindow - 100
	});
}


// from NWO
// decrypt helper function
function decryptCharcode(n, start, end, offset) {
	n = n + offset;
	if (offset > 0 && n > end) {
		n = start + (n - end - 1);
	} else if (offset < 0 && n < start) {
		n = end - (start - n - 1);
	}
	return String.fromCharCode(n);
}
// decrypt string
function decryptString(enc, offset) {
	var dec = "";
	var len = enc.length;
	for (var i = 0; i < len; i++) {
		var n = enc.charCodeAt(i);
		if (n >= 0x2B && n <= 0x3A) {
			dec += decryptCharcode(n, 0x2B, 0x3A, offset); // 0-9 . , - + / :
		} else if (n >= 0x40 && n <= 0x5A) {
			dec += decryptCharcode(n, 0x40, 0x5A, offset); // A-Z @
		} else if (n >= 0x61 && n <= 0x7A) {
			dec += decryptCharcode(n, 0x61, 0x7A, offset); // a-z
		} else {
			dec += enc.charAt(i);
		}
	}
	return dec;
}
// decrypt spam-protected emails
function linkTo_UnCryptMailto(s) {
	location.href = decryptString(s, 3);
}

function autoHeight(heightClass) {
	var maxHeight = 0;
	$(heightClass).css("height", "");
	$(heightClass).each(function () {
		if ($(this).height() > maxHeight) {
			maxHeight = $(this).height();
		}
	});
	$(heightClass).height(maxHeight);
}

function autoWidth(widthClass) {
	//console.log('widthClass: '+widthClass);
	var maxWidth = 0;
	$(widthClass).css("width", "");
	$(widthClass).each(function () {
		//console.log('each: ');
		//console.log('this: '+this);
		//console.log('this: '+$(this).width());

		if ($(this).width() > maxWidth) {
			maxWidth = $(this).width();
			//console.log('maxWidth: '+maxWidth);
		}
	});
	$(widthClass).width(maxWidth);
}


function msieversion() {
	var ua = window.navigator.userAgent;
	var msie = ua.indexOf("MSIE ");

	if (msie > 0) { // If IE, return version number
		return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
	} else if (!!navigator.userAgent.match(/Trident\/7\./)) {
		return 11;
	} else if (!!navigator.userAgent.match(/Edge\/1/)) {
		return 13;
	} else { // If another browser, return 0
		return 0;
	}
}

// close other level3s
$("li.mainLvl2li a").click(function () {
	//$( this ).parents(".level2").css("width", "");
	$(this).parents(".mainLvl2li").siblings().removeClass('open');
});

/* EPIC NAV */
jQuery(document).ready(function ($) {
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('#topbar').outerHeight();

	$(window).scroll(function (event) {
		didScroll = true;
	});

	setInterval(function () {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 250);

	function hasScrolled() {
		if (!$("#mobileNavToggleButton").hasClass("active")) {
			var st = $(this).scrollTop();

			// Make sure they scroll more than delta
			if (Math.abs(lastScrollTop - st) <= delta)
				return;

			// If they scrolled down and are past the navbar, add class .nav-up.
			// This is necessary so you never see what is "behind" the navbar.
			if (st > lastScrollTop && st > navbarHeight) {
				// Scroll Down
				if (!$(".navbar-header .navbar-toggle").hasClass("active")) {
					$('#topbar').removeClass('nav-down').addClass('nav-up');
					$('#mainNaviMobile').addClass('hidden');
				}
			} else {
				// Scroll Up
				if (st + $(window).height() < $(document).height()) {
					$('#topbar').removeClass('nav-up').addClass('nav-down');
					$('#mainNaviMobile').removeClass('hidden');
				}
			}

			lastScrollTop = st;
		}
	}
});


//mainnav lvl2 width 
$("#mainNavi > ul > li").click(function () {
	//console.log("+++ mainnav lvl2 width");
	var ullvl2 = $(this).find('ul.level2');
	//console.log('ul.level2.width: '+ullvl2.width());
	$(ullvl2).css("width", "");

	//console.log("---- lvl2 width: "+ullvl2.width());
	$(ullvl2).css("margin-left", ullvl2.width() / 2 * -1);
});

//mainnav lvl2 -> lvl3
$("li.mainLvl2li a").click(function () {

	var OSName = "unknown";
	if (navigator.appVersion.indexOf("Win") != -1) OSName = "windows";
	else if (navigator.appVersion.indexOf("Mac") != -1) OSName = "mac";
	else if (navigator.appVersion.indexOf("Linux") != -1) OSName = "linux";
	else if (navigator.appVersion.indexOf("X11") != -1) OSName = "unix";

	console.log('OS: ' + OSName);

	var Browser = "generic";
	if (!!navigator.userAgent.toLowerCase().match(/chrom(e|ium)/)) Browser = "chrome";
	else if (!!navigator.userAgent.toLowerCase().match(/safari\//)) Browser = "safari";
	else if (!!navigator.userAgent.toLowerCase().match(/firefox/)) Browser = "firefox";
	else if (msieversion) Browser = "ie";

	console.log('Browser: ' + Browser);


	var ullvl2 = $(this).closest('.level2');
	$(ullvl2).css("width", "");

	if ($(ullvl2).hasClass('sec')) {
		if (Browser === "chrome") {
			console.log('+ Chrome');
			if (OSName === "windows") {
				console.log('++ Windows');
				var ullvl2wdth = ullvl2.width() - 56;
			} else {
				console.log('++ Else');
				var ullvl2wdth = ullvl2.width() - 64;
			}
		} else if (Browser === "ie") {
			console.log('+ IE');
			var ullvl2wdth = ullvl2.width() - 56;
		} else if (Browser === "safari") {
			console.log('+ Safari');
			if (!!navigator.userAgent.toLowerCase().match(/ipad/)) {
				console.log("++ iPad");
				var ullvl2wdth = ullvl2.width() - 64;
			} else {
				console.log("++ kein iPad");
				var ullvl2wdth = ullvl2.width() - 65;
			}
		} else if (Browser === "firefox") {
			console.log('+ Firefox');
			if (OSName === "windows") {
				console.log('++ Windows');
				var ullvl2wdth = ullvl2.width() - 56;
			} else if (OSName === "mac") {
				console.log('++ Mac');
				var ullvl2wdth = ullvl2.width() - 65;
			} else {
				console.log('++ Not');
				var ullvl2wdth = ullvl2.width() - 64;
			}
		} else {
			console.log('+ Else');
			var ullvl2wdth = ullvl2.width() - 64;
		}

	} else {
		var ullvl2wdth = ullvl2.width();
	}

	$(ullvl2).css("margin-left", ullvl2wdth * -1);

	// #mainNavi ul.level3
	var ullvl3 = $(this).closest('.level2').find('ul.level3');
	var ullvl3wdth = ullvl3.width() + 64;

	if ($(ullvl2).hasClass('sec')) {
		var wllvl2lvl3wdith = ullvl2wdth + ullvl3wdth;
	} else {
		var wllvl2lvl3wdith = ullvl2wdth + ullvl3wdth;
	};
	$(ullvl2).width(wllvl2lvl3wdith);
	$(ullvl2).addClass("sec");

	$(ullvl3).css("left", ullvl2wdth);

	var scrollHeight = $(this).closest('.mainLvl2li')[0].scrollHeight;

	var position = $(this).closest('.mainLvl2li').position();
	var scrollTop = $(this).closest('.level2').scrollTop();

	var scrollHeightT = $(this)[0].scrollHeight;
	var positionT = $(this).position();
	var scrollTopT = $(this).scrollTop();

	var movingup = (position.top + scrollTop) * -1;

	$(ullvl3).css("top", movingup);

	var parentlvl2 = $(this).closest('.level2');
	var heightofparent = parentlvl2[0].scrollHeight;
	console.log(heightofparent);
	$(ullvl3).css("height", heightofparent);
	$(ullvl3).css("font-size", '13px');
});


$(".calendarMorelink").click(function () {
	$(".calendarLinksHidden").toggle("slow");
});


/* Tabs */
jQuery(function ($) {


	/*SEARCH Results*/
	$('.tx-indexedsearch-form input[type=text]').each(function () {
		$(this).wrapAll('<div class="searchfieldWrap"></div>');
		$(this).after('<span class="icon-wg-misc-magnifier"></span>');
	});

	/* SEARCH Arrows*/
	$('.tx-indexedsearch .browsebox li a').each(function (e) {
		if ($(this).html() == '>') {
			$(this).html('');
			$(this).parent().addClass('next');
		}
		if ($(this).html() == '<') {
			$(this).html('');
			$(this).parent().addClass('prev');
		}
	})
});


function normalIcon() {
	return {
		url: '/typo3conf/ext/we_map/Resources/Public/Media/Marker/multi_default.png'
	};
}

function highlightedIcon() {
	return {
		url: '/typo3conf/ext/we_map/Resources/Public/Media/Marker/multi_active.png'
	};
}

function highlightIt(blub) {
	var icon = $(blub).icon;
	//return {
	//  url: 'http://steeplemedia.com/images/markers/markerGreen.png'
	//};
}


var icondefault;
var iconactive;
var poiid;
var acticon;

$('#resultTable1').on('mouseenter', '.markerrow', function () {
	poiid = $(this).find(".row").attr("data-poi");
	acticon = pois[poiid].icon;
	if (typeof acticon === 'object') {
		acticon = pois[poiid].icon.url;
	};
	iconactive = acticon.replace("default", "active");
	pois[poiid].setIcon(settingicon(iconactive));
}).on('mouseleave', '.markerrow', function () {
	acticon = pois[poiid].icon.url;
	icondefault = acticon.replace("active", "default");
	pois[poiid].setIcon(settingicon(icondefault));
});


function settingicon(icontoset) {
	return {
		url: icontoset
	};
}

// hide compare button if category is highlighted
$(document).ready(function () {
	var nocompare = $('.row.bottom').hasClass("nocompare-1");
	//console.log('nocompare: '+ nocompare);
	if (nocompare) {
		//     console.log( 'true - >' );
		$('.submit_compare_wrapper').addClass('hidden')
	}
});


$('div.dealer-filter button').on('click', function (event) {
	$(this).parent().toggleClass("open");
});

$('body').on('click', function (e) {
	if (!$('div.dealer-filter').is(e.target) && $('div.dealer-filter').has(e.target).length === 0 && $('.open').has(e.target).length === 0) {
		$('div.dealer-filter').removeClass('open');
	}
});
// share button
$(document).ready(function () {
	var $shareURL = $('#content').find('#share-url'),
		$shareCopied = $('#share-copied'),
		showClass = 'show';

	$shareURL.on('focus', function (e) {
		$(this).select();
		console.log('lgo');
		if (copyToClipboard()) {
			$shareCopied.addClass(showClass);
		}
	});
});

function copyToClipboard() {
	try {
		var copy = document.execCommand('copy'),
			success = copy ? true : false;

		return success
	} catch (err) {
		// do nothing, let user copy to clipboard manually
	}
};


window.onload = function () {
	// kategorie listenansicht
	autoHeight('.productlist .col .title');
	autoHeight('.productlist .col .subtitle');
	autoHeight('.productlist .col .price');
	autoHeight('.productlist .col .bottom');
	autoHeight('.productlist .col .image');

	// footer
	autoHeight('#mini-sidemap .col');

	// teaser boxen
	autoHeight('.teaserbox .text');
	autoHeight('.teaserbox .image img');

	// catbox
	autoHeight('.catthumb');
	autoHeight('.caption_media');
	autoHeight('.catbox .title');

	// compare ul
	autoHeight('.compareimage');
	autoHeight('.comparenote');

	// accessories
	autoHeight("#accessories .title");
	autoHeight("#accessories .image");

};


$(window).resize(function () {
	setTimeout(function () {
		addScollbarMainNav();
		// kategorie listenansicht
		autoHeight('.productlist .col .title');
		autoHeight('.productlist .col .subtitle');
		autoHeight('.productlist .col .price');
		autoHeight('.productlist .col .bottom');
		autoHeight('.productlist .col .image');

		// footer
		autoHeight('#mini-sidemap .col');

		// teaser boxen
		autoHeight('.teaserbox .text');
		autoHeight('.teaserbox .image img');

		// catbox
		autoHeight('.catthumb');
		autoHeight('.caption_media');
		autoHeight('.catbox .title');

		// compare ul
		autoHeight('.compareimage');
		autoHeight('.comparenote');

		// accessories
		autoHeight("#accessories .title");
		autoHeight("#accessories .image");
	}, 1);
});


// anchorlinks padding top
$(window).on("hashchange", function () {
	window.scrollTo(window.scrollX, window.scrollY - 50);
});


/*SCROLLTOTOP*/
jQuery(function ($) {

	$(".scrollTop").hide();

	animateScroll('.scrollTop');

	$('.scrollTop').on('click', function (e) {
		e.preventDefault();
		scrallNowToTop();
	});

	function animateScroll(classname) {

		$(window).scroll(function () {

			if ($(this).scrollTop() > 100) {
				$(classname).fadeIn();
			} else {
				$(classname).fadeOut();
			}

		});
	}

	function scrallNowToTop() {

		$('body,html').animate({
			scrollTop: 0
		}, 800);

	}

});

// jQuery RoyalSlider plugin. Copyright Dmitry Semenov, http://dimsemenov.com 
// jquery.royalslider v9.5.4
(function (n) {
	function u(b, f) {
		var c, a = this,
			e = window.navigator,
			g = e.userAgent.toLowerCase();
		a.uid = n.rsModules.uid++;
		a.ns = ".rs" + a.uid;
		var d = document.createElement("div").style,
			h = ["webkit", "Moz", "ms", "O"],
			k = "",
			l = 0,
			r;
		for (c = 0; c < h.length; c++) r = h[c], !k && r + "Transform" in d && (k = r), r = r.toLowerCase(), window.requestAnimationFrame || (window.requestAnimationFrame = window[r + "RequestAnimationFrame"], window.cancelAnimationFrame = window[r + "CancelAnimationFrame"] || window[r + "CancelRequestAnimationFrame"]);
		window.requestAnimationFrame ||
			(window.requestAnimationFrame = function (a, b) {
				var c = (new Date).getTime(),
					d = Math.max(0, 16 - (c - l)),
					e = window.setTimeout(function () {
						a(c + d)
					}, d);
				l = c + d;
				return e
			});
		window.cancelAnimationFrame || (window.cancelAnimationFrame = function (a) {
			clearTimeout(a)
		});
		a.isIPAD = g.match(/(ipad)/);
		a.isIOS = a.isIPAD || g.match(/(iphone|ipod)/);
		c = function (a) {
			a = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || 0 > a.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
			return {
				browser: a[1] || "",
				version: a[2] || "0"
			}
		}(g);
		h = {};
		c.browser && (h[c.browser] = !0, h.version = c.version);
		h.chrome && (h.webkit = !0);
		a._a = h;
		a.isAndroid = -1 < g.indexOf("android");
		a.slider = n(b);
		a.ev = n(a);
		a._b = n(document);
		a.st = n.extend({}, n.fn.royalSlider.defaults, f);
		a._c = a.st.transitionSpeed;
		a._d = 0;
		!a.st.allowCSS3 || h.webkit && !a.st.allowCSS3OnWebkit || (c = k + (k ? "T" : "t"), a._e = c + "ransform" in d && c + "ransition" in d, a._e && (a._f = k + (k ? "P" : "p") + "erspective" in d));
		k = k.toLowerCase();
		a._g = "-" + k + "-";
		a._h = "vertical" === a.st.slidesOrientation ?
			!1 : !0;
		a._i = a._h ? "left" : "top";
		a._j = a._h ? "width" : "height";
		a._k = -1;
		a._l = "fade" === a.st.transitionType ? !1 : !0;
		a._l || (a.st.sliderDrag = !1, a._m = 10);
		a._n = "z-index:0; display:none; opacity:0;";
		a._o = 0;
		a._p = 0;
		a._q = 0;
		n.each(n.rsModules, function (b, c) {
			"uid" !== b && c.call(a)
		});
		a.slides = [];
		a._r = 0;
		(a.st.slides ? n(a.st.slides) : a.slider.children().detach()).each(function () {
			a._s(this, !0)
		});
		a.st.randomizeSlides && a.slides.sort(function () {
			return 0.5 - Math.random()
		});
		a.numSlides = a.slides.length;
		a._t();
		a.st.startSlideId ? a.st.startSlideId >
			a.numSlides - 1 && (a.st.startSlideId = a.numSlides - 1) : a.st.startSlideId = 0;
		a._o = a.staticSlideId = a.currSlideId = a._u = a.st.startSlideId;
		a.currSlide = a.slides[a.currSlideId];
		a._v = 0;
		a.pointerMultitouch = !1;
		a.slider.addClass((a._h ? "rsHor" : "rsVer") + (a._l ? "" : " rsFade"));
		d = '<div class="rsOverflow"><div class="rsContainer">';
		a.slidesSpacing = a.st.slidesSpacing;
		a._w = (a._h ? a.slider.width() : a.slider.height()) + a.st.slidesSpacing;
		a._x = Boolean(0 < a._y);
		1 >= a.numSlides && (a._z = !1);
		a._a1 = a._z && a._l ? 2 === a.numSlides ? 1 : 2 : 0;
		a._b1 =
			6 > a.numSlides ? a.numSlides : 6;
		a._c1 = 0;
		a._d1 = 0;
		a.slidesJQ = [];
		for (c = 0; c < a.numSlides; c++) a.slidesJQ.push(n('<div style="' + (a._l ? "" : c !== a.currSlideId ? a._n : "z-index:0;") + '" class="rsSlide "></div>'));
		a._e1 = d = n(d + "</div></div>");
		var m = a.ns,
			k = function (b, c, d, e, f) {
				a._j1 = b + c + m;
				a._k1 = b + d + m;
				a._l1 = b + e + m;
				f && (a._m1 = b + f + m)
			};
		c = e.pointerEnabled;
		a.pointerEnabled = c || e.msPointerEnabled;
		a.pointerEnabled ? (a.hasTouch = !1, a._n1 = 0.2, a.pointerMultitouch = Boolean(1 < e[(c ? "m" : "msM") + "axTouchPoints"]), c ? k("pointer", "down", "move", "up",
			"cancel") : k("MSPointer", "Down", "Move", "Up", "Cancel")) : (a.isIOS ? a._j1 = a._k1 = a._l1 = a._m1 = "" : k("mouse", "down", "move", "up"), "ontouchstart" in window || "createTouch" in document ? (a.hasTouch = !0, a._j1 += " touchstart" + m, a._k1 += " touchmove" + m, a._l1 += " touchend" + m, a._m1 += " touchcancel" + m, a._n1 = 0.5, a.st.sliderTouch && (a._f1 = !0)) : (a.hasTouch = !1, a._n1 = 0.2));
		a.st.sliderDrag && (a._f1 = !0, h.msie || h.opera ? a._g1 = a._h1 = "move" : h.mozilla ? (a._g1 = "-moz-grab", a._h1 = "-moz-grabbing") : h.webkit && -1 != e.platform.indexOf("Mac") && (a._g1 =
			"-webkit-grab", a._h1 = "-webkit-grabbing"), a._i1());
		a.slider.html(d);
		a._o1 = a.st.controlsInside ? a._e1 : a.slider;
		a._p1 = a._e1.children(".rsContainer");
		a.pointerEnabled && a._p1.css((c ? "" : "-ms-") + "touch-action", a._h ? "pan-y" : "pan-x");
		a._q1 = n('<div class="rsPreloader"></div>');
		e = a._p1.children(".rsSlide");
		a._r1 = a.slidesJQ[a.currSlideId];
		a._s1 = 0;
		a._e ? (a._t1 = "transition-property", a._u1 = "transition-duration", a._v1 = "transition-timing-function", a._w1 = a._x1 = a._g + "transform", a._f ? (h.webkit && !h.chrome && a.slider.addClass("rsWebkit3d"),
			a._y1 = "translate3d(", a._z1 = "px, ", a._a2 = "px, 0px)") : (a._y1 = "translate(", a._z1 = "px, ", a._a2 = "px)"), a._l ? a._p1[a._g + a._t1] = a._g + "transform" : (h = {}, h[a._g + a._t1] = "opacity", h[a._g + a._u1] = a.st.transitionSpeed + "ms", h[a._g + a._v1] = a.st.css3easeInOut, e.css(h))) : (a._x1 = "left", a._w1 = "top");
		var p;
		n(window).on("resize" + a.ns, function () {
			p && clearTimeout(p);
			p = setTimeout(function () {
				a.updateSliderSize()
			}, 50)
		});
		a.ev.trigger("rsAfterPropsSetup");
		a.updateSliderSize();
		a.st.keyboardNavEnabled && a._b2();
		a.st.arrowsNavHideOnTouch &&
			(a.hasTouch || a.pointerMultitouch) && (a.st.arrowsNav = !1);
		a.st.arrowsNav && (e = a._o1, n('<div class="rsArrow rsArrowLeft"><div class="rsArrowIcn"></div></div><div class="rsArrow rsArrowRight"><div class="rsArrowIcn"></div></div>').appendTo(e), a._c2 = e.children(".rsArrowLeft").click(function (b) {
			b.preventDefault();
			a.prev()
		}), a._d2 = e.children(".rsArrowRight").click(function (b) {
			b.preventDefault();
			a.next()
		}), a.st.arrowsNavAutoHide && !a.hasTouch && (a._c2.addClass("rsHidden"), a._d2.addClass("rsHidden"), e.one("mousemove.arrowshover",
			function () {
				a._c2.removeClass("rsHidden");
				a._d2.removeClass("rsHidden")
			}), e.hover(function () {
			a._e2 || (a._c2.removeClass("rsHidden"), a._d2.removeClass("rsHidden"))
		}, function () {
			a._e2 || (a._c2.addClass("rsHidden"), a._d2.addClass("rsHidden"))
		})), a.ev.on("rsOnUpdateNav", function () {
			a._f2()
		}), a._f2());
		if (a._f1) a._p1.on(a._j1, function (b) {
			a._g2(b)
		});
		else a.dragSuccess = !1;
		var q = ["rsPlayBtnIcon", "rsPlayBtn", "rsCloseVideoBtn", "rsCloseVideoIcn"];
		a._p1.click(function (b) {
			if (!a.dragSuccess) {
				var c = n(b.target).attr("class");
				if (-1 !== n.inArray(c, q) && a.toggleVideo()) return !1;
				if (a.st.navigateByClick && !a._h2) {
					if (n(b.target).closest(".rsNoDrag", a._r1).length) return !0;
					a._i2(b)
				}
				a.ev.trigger("rsSlideClick", b)
			}
		}).on("click.rs", "a", function (b) {
			if (a.dragSuccess) return !1;
			a._h2 = !0;
			setTimeout(function () {
				a._h2 = !1
			}, 3)
		});
		a.ev.trigger("rsAfterInit")
	}
	n.rsModules || (n.rsModules = {
		uid: 0
	});
	u.prototype = {
		constructor: u,
		_i2: function (b) {
			b = b[this._h ? "pageX" : "pageY"] - this._j2;
			b >= this._q ? this.next() : 0 > b && this.prev()
		},
		_t: function () {
			var b;
			b = this.st.numImagesToPreload;
			if (this._z = this.st.loop) 2 === this.numSlides ? (this._z = !1, this.st.loopRewind = !0) : 2 > this.numSlides && (this.st.loopRewind = this._z = !1);
			this._z && 0 < b && (4 >= this.numSlides ? b = 1 : this.st.numImagesToPreload > (this.numSlides - 1) / 2 && (b = Math.floor((this.numSlides - 1) / 2)));
			this._y = b
		},
		_s: function (b, f) {
			function c(b, c) {
				c ? g.images.push(b.attr(c)) : g.images.push(b.text());
				if (h) {
					h = !1;
					g.caption = "src" === c ? b.attr("alt") : b.contents();
					g.image = g.images[0];
					g.videoURL = b.attr("data-rsVideo");
					var d = b.attr("data-rsw"),
						e = b.attr("data-rsh");
					"undefined" !== typeof d && !1 !== d && "undefined" !== typeof e && !1 !== e ? (g.iW = parseInt(d, 10), g.iH = parseInt(e, 10)) : a.st.imgWidth && a.st.imgHeight && (g.iW = a.st.imgWidth, g.iH = a.st.imgHeight)
				}
			}
			var a = this,
				e, g = {},
				d, h = !0;
			b = n(b);
			a._k2 = b;
			a.ev.trigger("rsBeforeParseNode", [b, g]);
			if (!g.stopParsing) return b = a._k2, g.id = a._r, g.contentAdded = !1, a._r++, g.images = [], g.isBig = !1, g.hasCover || (b.hasClass("rsImg") ? (d = b, e = !0) : (d = b.find(".rsImg"), d.length && (e = !0)), e ? (g.bigImage = d.eq(0).attr("data-rsBigImg"), d.each(function () {
				var a = n(this);
				a.is("a") ? c(a, "href") : a.is("img") ? c(a, "src") : c(a)
			})) : b.is("img") && (b.addClass("rsImg rsMainSlideImage"), c(b, "src"))), d = b.find(".rsCaption"), d.length && (g.caption = d.remove()), g.content = b, a.ev.trigger("rsAfterParseNode", [b, g]), f && a.slides.push(g), 0 === g.images.length && (g.isLoaded = !0, g.isRendered = !1, g.isLoading = !1, g.images = null), g
		},
		_b2: function () {
			var b = this,
				f, c, a = function (a) {
					37 === a ? b.prev() : 39 === a && b.next()
				};
			b._b.on("keydown" + b.ns, function (e) {
				b._l2 || (c = e.keyCode, 37 !== c && 39 !== c || f || (a(c), f = setInterval(function () {
						a(c)
					},
					700)))
			}).on("keyup" + b.ns, function (a) {
				f && (clearInterval(f), f = null)
			})
		},
		goTo: function (b, f) {
			b !== this.currSlideId && this._m2(b, this.st.transitionSpeed, !0, !f)
		},
		destroy: function (b) {
			this.ev.trigger("rsBeforeDestroy");
			this._b.off("keydown" + this.ns + " keyup" + this.ns + " " + this._k1 + " " + this._l1);
			this._p1.off(this._j1 + " click");
			this.slider.data("royalSlider", null);
			n.removeData(this.slider, "royalSlider");
			n(window).off("resize" + this.ns);
			this.loadingTimeout && clearTimeout(this.loadingTimeout);
			b && this.slider.remove();
			this.ev = this.slider = this.slides = null
		},
		_n2: function (b, f) {
			function c(c, f, g) {
				c.isAdded ? (a(f, c), e(f, c)) : (g || (g = d.slidesJQ[f]), c.holder ? g = c.holder : (g = d.slidesJQ[f] = n(g), c.holder = g), c.appendOnLoaded = !1, e(f, c, g), a(f, c), d._p2(c, g, b), c.isAdded = !0)
			}

			function a(a, c) {
				c.contentAdded || (d.setItemHtml(c, b), b || (c.contentAdded = !0))
			}

			function e(a, b, c) {
				d._l && (c || (c = d.slidesJQ[a]), c.css(d._i, (a + d._d1 + p) * d._w))
			}

			function g(a) {
				if (l) {
					if (a > r - 1) return g(a - r);
					if (0 > a) return g(r + a)
				}
				return a
			}
			var d = this,
				h, k, l = d._z,
				r = d.numSlides;
			if (!isNaN(f)) return g(f);
			var m = d.currSlideId,
				p, q = b ? Math.abs(d._o2 - d.currSlideId) >= d.numSlides - 1 ? 0 : 1 : d._y,
				s = Math.min(2, q),
				v = !1,
				u = !1,
				t;
			for (k = m; k < m + 1 + s; k++)
				if (t = g(k), (h = d.slides[t]) && (!h.isAdded || !h.positionSet)) {
					v = !0;
					break
				}
			for (k = m - 1; k > m - 1 - s; k--)
				if (t = g(k), (h = d.slides[t]) && (!h.isAdded || !h.positionSet)) {
					u = !0;
					break
				}
			if (v)
				for (k = m; k < m + q + 1; k++) t = g(k), p = Math.floor((d._u - (m - k)) / d.numSlides) * d.numSlides, (h = d.slides[t]) && c(h, t);
			if (u)
				for (k = m - 1; k > m - 1 - q; k--) t = g(k), p = Math.floor((d._u - (m - k)) / r) * r, (h = d.slides[t]) && c(h, t);
			if (!b)
				for (s = g(m - q),
					m = g(m + q), q = s > m ? 0 : s, k = 0; k < r; k++) s > m && k > s - 1 || !(k < q || k > m) || (h = d.slides[k]) && h.holder && (h.holder.detach(), h.isAdded = !1)
		},
		setItemHtml: function (b, f) {
			var c = this,
				a = function () {
					if (!b.images) b.isRendered = !0, b.isLoaded = !0, b.isLoading = !1, d(!0);
					else if (!b.isLoading) {
						var a, f;
						b.content.hasClass("rsImg") ? (a = b.content, f = !0) : a = b.content.find(".rsImg:not(img)");
						a && !a.is("img") && a.each(function () {
							var a = n(this),
								c = '<img class="rsImg" src="' + (a.is("a") ? a.attr("href") : a.text()) + '" />';
							f ? b.content = n(c) : a.replaceWith(c)
						});
						a = f ? b.content : b.content.find("img.rsImg");
						k();
						a.eq(0).addClass("rsMainSlideImage");
						b.iW && b.iH && (b.isLoaded || c._q2(b), d());
						b.isLoading = !0;
						if (b.isBig) n("<img />").on("load.rs error.rs", function (a) {
							n(this).off("load.rs error.rs");
							e([this], !0)
						}).attr("src", b.image);
						else {
							b.loaded = [];
							b.numStartedLoad = 0;
							a = function (a) {
								n(this).off("load.rs error.rs");
								b.loaded.push(this);
								b.loaded.length === b.numStartedLoad && e(b.loaded, !1)
							};
							for (var g = 0; g < b.images.length; g++) {
								var h = n("<img />");
								b.numStartedLoad++;
								h.on("load.rs error.rs",
									a).attr("src", b.images[g])
							}
						}
					}
				},
				e = function (a, c) {
					if (a.length) {
						var d = a[0];
						if (c !== b.isBig)(d = b.holder.children()) && 1 < d.length && l();
						else if (b.iW && b.iH) g();
						else if (b.iW = d.width, b.iH = d.height, b.iW && b.iH) g();
						else {
							var e = new Image;
							e.onload = function () {
								e.width ? (b.iW = e.width, b.iH = e.height, g()) : setTimeout(function () {
									e.width && (b.iW = e.width, b.iH = e.height);
									g()
								}, 1E3)
							};
							e.src = d.src
						}
					} else g()
				},
				g = function () {
					b.isLoaded = !0;
					b.isLoading = !1;
					d();
					l();
					h()
				},
				d = function () {
					if (!b.isAppended && c.ev) {
						var a = c.st.visibleNearby,
							d = b.id - c._o;
						f || b.appendOnLoaded || !c.st.fadeinLoadedSlide || 0 !== d && (!(a || c._r2 || c._l2) || -1 !== d && 1 !== d) || (a = {
							visibility: "visible",
							opacity: 0
						}, a[c._g + "transition"] = "opacity 400ms ease-in-out", b.content.css(a), setTimeout(function () {
							b.content.css("opacity", 1)
						}, 16));
						b.holder.find(".rsPreloader").length ? b.holder.append(b.content) : b.holder.html(b.content);
						b.isAppended = !0;
						b.isLoaded && (c._q2(b), h());
						b.sizeReady || (b.sizeReady = !0, setTimeout(function () {
							c.ev.trigger("rsMaybeSizeReady", b)
						}, 100))
					}
				},
				h = function () {
					!b.loadedTriggered &&
						c.ev && (b.isLoaded = b.loadedTriggered = !0, b.holder.trigger("rsAfterContentSet"), c.ev.trigger("rsAfterContentSet", b))
				},
				k = function () {
					c.st.usePreloader && b.holder.html(c._q1.clone())
				},
				l = function (a) {
					c.st.usePreloader && (a = b.holder.find(".rsPreloader"), a.length && a.remove())
				};
			b.isLoaded ? d() : f ? !c._l && b.images && b.iW && b.iH ? a() : (b.holder.isWaiting = !0, k(), b.holder.slideId = -99) : a()
		},
		_p2: function (b, f, c) {
			this._p1.append(b.holder);
			b.appendOnLoaded = !1
		},
		_g2: function (b, f) {
			var c = this,
				a, e = "touchstart" === b.type;
			c._s2 = e;
			c.ev.trigger("rsDragStart");
			if (n(b.target).closest(".rsNoDrag", c._r1).length) return c.dragSuccess = !1, !0;
			!f && c._r2 && (c._t2 = !0, c._u2());
			c.dragSuccess = !1;
			if (c._l2) e && (c._v2 = !0);
			else {
				e && (c._v2 = !1);
				c._w2();
				if (e) {
					var g = b.originalEvent.touches;
					if (g && 0 < g.length) a = g[0], 1 < g.length && (c._v2 = !0);
					else return
				} else b.preventDefault(), a = b, c.pointerEnabled && (a = a.originalEvent);
				c._l2 = !0;
				c._b.on(c._k1, function (a) {
					c._x2(a, f)
				}).on(c._l1, function (a) {
					c._y2(a, f)
				});
				c._z2 = "";
				c._a3 = !1;
				c._b3 = a.pageX;
				c._c3 = a.pageY;
				c._d3 = c._v = (f ? c._e3 : c._h) ? a.pageX : a.pageY;
				c._f3 = 0;
				c._g3 = 0;
				c._h3 = f ? c._i3 : c._p;
				c._j3 = (new Date).getTime();
				if (e) c._e1.on(c._m1, function (a) {
					c._y2(a, f)
				})
			}
		},
		_k3: function (b, f) {
			if (this._l3) {
				var c = this._m3,
					a = b.pageX - this._b3,
					e = b.pageY - this._c3,
					g = this._h3 + a,
					d = this._h3 + e,
					h = f ? this._e3 : this._h,
					g = h ? g : d,
					d = this._z2;
				this._a3 = !0;
				this._b3 = b.pageX;
				this._c3 = b.pageY;
				"x" === d && 0 !== a ? this._f3 = 0 < a ? 1 : -1 : "y" === d && 0 !== e && (this._g3 = 0 < e ? 1 : -1);
				d = h ? this._b3 : this._c3;
				a = h ? a : e;
				f ? g > this._n3 ? g = this._h3 + a * this._n1 : g < this._o3 && (g = this._h3 + a * this._n1) : this._z || (0 >= this.currSlideId &&
					0 < d - this._d3 && (g = this._h3 + a * this._n1), this.currSlideId >= this.numSlides - 1 && 0 > d - this._d3 && (g = this._h3 + a * this._n1));
				this._h3 = g;
				200 < c - this._j3 && (this._j3 = c, this._v = d);
				f ? this._q3(this._h3) : this._l && this._p3(this._h3)
			}
		},
		_x2: function (b, f) {
			var c = this,
				a, e = "touchmove" === b.type;
			if (!c._s2 || e) {
				if (e) {
					if (c._r3) return;
					var g = b.originalEvent.touches;
					if (g) {
						if (1 < g.length) return;
						a = g[0]
					} else return
				} else a = b, c.pointerEnabled && (a = a.originalEvent);
				c._a3 || (c._e && (f ? c._s3 : c._p1).css(c._g + c._u1, "0s"), function h() {
					c._l2 && (c._t3 =
						requestAnimationFrame(h), c._u3 && c._k3(c._u3, f))
				}());
				if (c._l3) b.preventDefault(), c._m3 = (new Date).getTime(), c._u3 = a;
				else if (g = f ? c._e3 : c._h, a = Math.abs(a.pageX - c._b3) - Math.abs(a.pageY - c._c3) - (g ? -7 : 7), 7 < a) {
					if (g) b.preventDefault(), c._z2 = "x";
					else if (e) {
						c._v3(b);
						return
					}
					c._l3 = !0
				} else if (-7 > a) {
					if (!g) b.preventDefault(), c._z2 = "y";
					else if (e) {
						c._v3(b);
						return
					}
					c._l3 = !0
				}
			}
		},
		_v3: function (b, f) {
			this._r3 = !0;
			this._a3 = this._l2 = !1;
			this._y2(b)
		},
		_y2: function (b, f) {
			function c(a) {
				return 100 > a ? 100 : 500 < a ? 500 : a
			}

			function a(a, b) {
				if (e._l ||
					f) h = (-e._u - e._d1) * e._w, k = Math.abs(e._p - h), e._c = k / b, a && (e._c += 250), e._c = c(e._c), e._x3(h, !1)
			}
			var e = this,
				g, d, h, k;
			g = -1 < b.type.indexOf("touch");
			if (!e._s2 || g)
				if (e._s2 = !1, e.ev.trigger("rsDragRelease"), e._u3 = null, e._l2 = !1, e._r3 = !1, e._l3 = !1, e._m3 = 0, cancelAnimationFrame(e._t3), e._a3 && (f ? e._q3(e._h3) : e._l && e._p3(e._h3)), e._b.off(e._k1).off(e._l1), g && e._e1.off(e._m1), e._i1(), !e._a3 && !e._v2 && f && e._w3) {
					var l = n(b.target).closest(".rsNavItem");
					l.length && e.goTo(l.index())
				} else {
					d = f ? e._e3 : e._h;
					if (!e._a3 || "y" === e._z2 &&
						d || "x" === e._z2 && !d)
						if (!f && e._t2) {
							e._t2 = !1;
							if (e.st.navigateByClick) {
								e._i2(e.pointerEnabled ? b.originalEvent : b);
								e.dragSuccess = !0;
								return
							}
							e.dragSuccess = !0
						} else {
							e._t2 = !1;
							e.dragSuccess = !1;
							return
						}
					else e.dragSuccess = !0;
					e._t2 = !1;
					e._z2 = "";
					var r = e.st.minSlideOffset;
					g = g ? b.originalEvent.changedTouches[0] : e.pointerEnabled ? b.originalEvent : b;
					var m = d ? g.pageX : g.pageY,
						p = e._d3;
					g = e._v;
					var q = e.currSlideId,
						s = e.numSlides,
						v = d ? e._f3 : e._g3,
						u = e._z;
					Math.abs(m - p);
					g = m - g;
					d = (new Date).getTime() - e._j3;
					d = Math.abs(g) / d;
					if (0 === v || 1 >=
						s) a(!0, d);
					else {
						if (!u && !f)
							if (0 >= q) {
								if (0 < v) {
									a(!0, d);
									return
								}
							} else if (q >= s - 1 && 0 > v) {
							a(!0, d);
							return
						}
						if (f) {
							h = e._i3;
							if (h > e._n3) h = e._n3;
							else if (h < e._o3) h = e._o3;
							else {
								m = d * d / 0.006;
								l = -e._i3;
								p = e._y3 - e._z3 + e._i3;
								0 < g && m > l ? (l += e._z3 / (15 / (m / d * 0.003)), d = d * l / m, m = l) : 0 > g && m > p && (p += e._z3 / (15 / (m / d * 0.003)), d = d * p / m, m = p);
								l = Math.max(Math.round(d / 0.003), 50);
								h += m * (0 > g ? -1 : 1);
								if (h > e._n3) {
									e._a4(h, l, !0, e._n3, 200);
									return
								}
								if (h < e._o3) {
									e._a4(h, l, !0, e._o3, 200);
									return
								}
							}
							e._a4(h, l, !0)
						} else l = function (a) {
							var b = Math.floor(a / e._w);
							a - b * e._w >
								r && b++;
							return b
						}, p + r < m ? 0 > v ? a(!1, d) : (l = l(m - p), e._m2(e.currSlideId - l, c(Math.abs(e._p - (-e._u - e._d1 + l) * e._w) / d), !1, !0, !0)) : p - r > m ? 0 < v ? a(!1, d) : (l = l(p - m), e._m2(e.currSlideId + l, c(Math.abs(e._p - (-e._u - e._d1 - l) * e._w) / d), !1, !0, !0)) : a(!1, d)
					}
				}
		},
		_p3: function (b) {
			b = this._p = b;
			this._e ? this._p1.css(this._x1, this._y1 + (this._h ? b + this._z1 + 0 : 0 + this._z1 + b) + this._a2) : this._p1.css(this._h ? this._x1 : this._w1, b)
		},
		updateSliderSize: function (b) {
			var f, c;
			if (this.slider) {
				if (this.st.autoScaleSlider) {
					var a = this.st.autoScaleSliderWidth,
						e = this.st.autoScaleSliderHeight;
					this.st.autoScaleHeight ? (f = this.slider.width(), f != this.width && (this.slider.css("height", e / a * f), f = this.slider.width()), c = this.slider.height()) : (c = this.slider.height(), c != this.height && (this.slider.css("width", a / e * c), c = this.slider.height()), f = this.slider.width())
				} else f = this.slider.width(), c = this.slider.height();
				if (b || f != this.width || c != this.height) {
					this.width = f;
					this.height = c;
					this._b4 = f;
					this._c4 = c;
					this.ev.trigger("rsBeforeSizeSet");
					this.ev.trigger("rsAfterSizePropSet");
					this._e1.css({
						width: this._b4,
						height: this._c4
					});
					this._w = (this._h ? this._b4 : this._c4) + this.st.slidesSpacing;
					this._d4 = this.st.imageScalePadding;
					for (f = 0; f < this.slides.length; f++) b = this.slides[f], b.positionSet = !1, b && b.images && b.isLoaded && (b.isRendered = !1, this._q2(b));
					if (this._e4)
						for (f = 0; f < this._e4.length; f++) b = this._e4[f], b.holder.css(this._i, (b.id + this._d1) * this._w);
					this._n2();
					this._l && (this._e && this._p1.css(this._g + "transition-duration", "0s"), this._p3((-this._u - this._d1) * this._w));
					this.ev.trigger("rsOnUpdateNav")
				}
				this._j2 =
					this._e1.offset();
				this._j2 = this._j2[this._i]
			}
		},
		appendSlide: function (b, f) {
			var c = this._s(b);
			if (isNaN(f) || f > this.numSlides) f = this.numSlides;
			this.slides.splice(f, 0, c);
			this.slidesJQ.splice(f, 0, n('<div style="' + (this._l ? "position:absolute;" : this._n) + '" class="rsSlide"></div>'));
			f <= this.currSlideId && this.currSlideId++;
			this.ev.trigger("rsOnAppendSlide", [c, f]);
			this._f4(f);
			f === this.currSlideId && this.ev.trigger("rsAfterSlideChange")
		},
		removeSlide: function (b) {
			var f = this.slides[b];
			f && (f.holder && f.holder.remove(),
				b < this.currSlideId && this.currSlideId--, this.slides.splice(b, 1), this.slidesJQ.splice(b, 1), this.ev.trigger("rsOnRemoveSlide", [b]), this._f4(b), b === this.currSlideId && this.ev.trigger("rsAfterSlideChange"))
		},
		_f4: function (b) {
			var f = this;
			b = f.numSlides;
			b = 0 >= f._u ? 0 : Math.floor(f._u / b);
			f.numSlides = f.slides.length;
			0 === f.numSlides ? (f.currSlideId = f._d1 = f._u = 0, f.currSlide = f._g4 = null) : f._u = b * f.numSlides + f.currSlideId;
			for (b = 0; b < f.numSlides; b++) f.slides[b].id = b;
			f.currSlide = f.slides[f.currSlideId];
			f._r1 = f.slidesJQ[f.currSlideId];
			f.currSlideId >= f.numSlides ? f.goTo(f.numSlides - 1) : 0 > f.currSlideId && f.goTo(0);
			f._t();
			f._l && f._p1.css(f._g + f._u1, "0ms");
			f._h4 && clearTimeout(f._h4);
			f._h4 = setTimeout(function () {
				f._l && f._p3((-f._u - f._d1) * f._w);
				f._n2();
				f._l || f._r1.css({
					display: "block",
					opacity: 1
				})
			}, 14);
			f.ev.trigger("rsOnUpdateNav")
		},
		_i1: function () {
			this._f1 && this._l && (this._g1 ? this._e1.css("cursor", this._g1) : (this._e1.removeClass("grabbing-cursor"), this._e1.addClass("grab-cursor")))
		},
		_w2: function () {
			this._f1 && this._l && (this._h1 ? this._e1.css("cursor",
				this._h1) : (this._e1.removeClass("grab-cursor"), this._e1.addClass("grabbing-cursor")))
		},
		next: function (b) {
			this._m2("next", this.st.transitionSpeed, !0, !b)
		},
		prev: function (b) {
			this._m2("prev", this.st.transitionSpeed, !0, !b)
		},
		_m2: function (b, f, c, a, e) {
			var g = this,
				d, h, k;
			g.ev.trigger("rsBeforeMove", [b, a]);
			k = "next" === b ? g.currSlideId + 1 : "prev" === b ? g.currSlideId - 1 : b = parseInt(b, 10);
			if (!g._z) {
				if (0 > k) {
					g._i4("left", !a);
					return
				}
				if (k >= g.numSlides) {
					g._i4("right", !a);
					return
				}
			}
			g._r2 && (g._u2(!0), c = !1);
			h = k - g.currSlideId;
			k = g._o2 =
				g.currSlideId;
			var l = g.currSlideId + h;
			a = g._u;
			var n;
			g._z ? (l = g._n2(!1, l), a += h) : a = l;
			g._o = l;
			g._g4 = g.slidesJQ[g.currSlideId];
			g._u = a;
			g.currSlideId = g._o;
			g.currSlide = g.slides[g.currSlideId];
			g._r1 = g.slidesJQ[g.currSlideId];
			var l = g.st.slidesDiff,
				m = Boolean(0 < h);
			h = Math.abs(h);
			var p = Math.floor(k / g._y),
				q = Math.floor((k + (m ? l : -l)) / g._y),
				p = (m ? Math.max(p, q) : Math.min(p, q)) * g._y + (m ? g._y - 1 : 0);
			p > g.numSlides - 1 ? p = g.numSlides - 1 : 0 > p && (p = 0);
			k = m ? p - k : k - p;
			k > g._y && (k = g._y);
			if (h > k + l)
				for (g._d1 += (h - (k + l)) * (m ? -1 : 1), f *= 1.4, k = 0; k < g.numSlides; k++) g.slides[k].positionSet = !1;
			g._c = f;
			g._n2(!0);
			e || (n = !0);
			d = (-a - g._d1) * g._w;
			n ? setTimeout(function () {
				g._j4 = !1;
				g._x3(d, b, !1, c);
				g.ev.trigger("rsOnUpdateNav")
			}, 0) : (g._x3(d, b, !1, c), g.ev.trigger("rsOnUpdateNav"))
		},
		_f2: function () {
			this.st.arrowsNav && (1 >= this.numSlides ? (this._c2.css("display", "none"), this._d2.css("display", "none")) : (this._c2.css("display", "block"), this._d2.css("display", "block"), this._z || this.st.loopRewind || (0 === this.currSlideId ? this._c2.addClass("rsArrowDisabled") : this._c2.removeClass("rsArrowDisabled"), this.currSlideId ===
				this.numSlides - 1 ? this._d2.addClass("rsArrowDisabled") : this._d2.removeClass("rsArrowDisabled"))))
		},
		_x3: function (b, f, c, a, e) {
			function g() {
				var a;
				h && (a = h.data("rsTimeout")) && (h !== k && h.css({
					opacity: 0,
					display: "none",
					zIndex: 0
				}), clearTimeout(a), h.data("rsTimeout", ""));
				if (a = k.data("rsTimeout")) clearTimeout(a), k.data("rsTimeout", "")
			}
			var d = this,
				h, k, l = {};
			isNaN(d._c) && (d._c = 400);
			d._p = d._h3 = b;
			d.ev.trigger("rsBeforeAnimStart");
			d._e ? d._l ? (d._c = parseInt(d._c, 10), c = d._g + d._v1, l[d._g + d._u1] = d._c + "ms", l[c] = a ? n.rsCSS3Easing[d.st.easeInOut] :
				n.rsCSS3Easing[d.st.easeOut], d._p1.css(l), a || !d.hasTouch ? setTimeout(function () {
					d._p3(b)
				}, 5) : d._p3(b)) : (d._c = d.st.transitionSpeed, h = d._g4, k = d._r1, k.data("rsTimeout") && k.css("opacity", 0), g(), h && h.data("rsTimeout", setTimeout(function () {
				l[d._g + d._u1] = "0ms";
				l.zIndex = 0;
				l.display = "none";
				h.data("rsTimeout", "");
				h.css(l);
				setTimeout(function () {
					h.css("opacity", 0)
				}, 16)
			}, d._c + 60)), l.display = "block", l.zIndex = d._m, l.opacity = 0, l[d._g + d._u1] = "0ms", l[d._g + d._v1] = n.rsCSS3Easing[d.st.easeInOut], k.css(l), k.data("rsTimeout",
				setTimeout(function () {
					k.css(d._g + d._u1, d._c + "ms");
					k.data("rsTimeout", setTimeout(function () {
						k.css("opacity", 1);
						k.data("rsTimeout", "")
					}, 20))
				}, 20))) : d._l ? (l[d._h ? d._x1 : d._w1] = b + "px", d._p1.animate(l, d._c, a ? d.st.easeInOut : d.st.easeOut)) : (h = d._g4, k = d._r1, k.stop(!0, !0).css({
				opacity: 0,
				display: "block",
				zIndex: d._m
			}), d._c = d.st.transitionSpeed, k.animate({
				opacity: 1
			}, d._c, d.st.easeInOut), g(), h && h.data("rsTimeout", setTimeout(function () {
				h.stop(!0, !0).css({
					opacity: 0,
					display: "none",
					zIndex: 0
				})
			}, d._c + 60)));
			d._r2 = !0;
			d.loadingTimeout && clearTimeout(d.loadingTimeout);
			d.loadingTimeout = e ? setTimeout(function () {
				d.loadingTimeout = null;
				e.call()
			}, d._c + 60) : setTimeout(function () {
				d.loadingTimeout = null;
				d._k4(f)
			}, d._c + 60)
		},
		_u2: function (b) {
			this._r2 = !1;
			clearTimeout(this.loadingTimeout);
			if (this._l)
				if (!this._e) this._p1.stop(!0), this._p = parseInt(this._p1.css(this._x1), 10);
				else {
					if (!b) {
						b = this._p;
						var f = this._h3 = this._l4();
						this._p1.css(this._g + this._u1, "0ms");
						b !== f && this._p3(f)
					}
				}
			else 20 < this._m ? this._m = 10 : this._m++
		},
		_l4: function () {
			var b =
				window.getComputedStyle(this._p1.get(0), null).getPropertyValue(this._g + "transform").replace(/^matrix\(/i, "").split(/, |\)$/g),
				f = 0 === b[0].indexOf("matrix3d");
			return parseInt(b[this._h ? f ? 12 : 4 : f ? 13 : 5], 10)
		},
		_m4: function (b, f) {
			return this._e ? this._y1 + (f ? b + this._z1 + 0 : 0 + this._z1 + b) + this._a2 : b
		},
		_k4: function (b) {
			this._l || (this._r1.css("z-index", 0), this._m = 10);
			this._r2 = !1;
			this.staticSlideId = this.currSlideId;
			this._n2();
			this._n4 = !1;
			this.ev.trigger("rsAfterSlideChange")
		},
		_i4: function (b, f) {
			var c = this,
				a = (-c._u - c._d1) *
				c._w;
			if (0 !== c.numSlides && !c._r2)
				if (c.st.loopRewind) c.goTo("left" === b ? c.numSlides - 1 : 0, f);
				else if (c._l) {
				c._c = 200;
				var e = function () {
					c._r2 = !1
				};
				c._x3(a + ("left" === b ? 30 : -30), "", !1, !0, function () {
					c._r2 = !1;
					c._x3(a, "", !1, !0, e)
				})
			}
		},
		_q2: function (b, f) {
			if (!b.isRendered) {
				var c = b.content,
					a = "rsMainSlideImage",
					e, g = this.st.imageAlignCenter,
					d = this.st.imageScaleMode,
					h;
				b.videoURL && (a = "rsVideoContainer", "fill" !== d ? e = !0 : (h = c, h.hasClass(a) || (h = h.find("." + a)), h.css({
					width: "100%",
					height: "100%"
				}), a = "rsMainSlideImage"));
				c.hasClass(a) ||
					(c = c.find("." + a));
				if (c) {
					var k = b.iW,
						l = b.iH;
					b.isRendered = !0;
					if ("none" !== d || g) {
						a = "fill" !== d ? this._d4 : 0;
						h = this._b4 - 2 * a;
						var n = this._c4 - 2 * a,
							m, p, q = {};
						"fit-if-smaller" === d && (k > h || l > n) && (d = "fit");
						if ("fill" === d || "fit" === d) m = h / k, p = n / l, m = "fill" == d ? m > p ? m : p : "fit" == d ? m < p ? m : p : 1, k = Math.ceil(k * m, 10), l = Math.ceil(l * m, 10);
						"none" !== d && (q.width = k, q.height = l, e && c.find(".rsImg").css({
							width: "100%",
							height: "100%"
						}));
						g && (q.marginLeft = Math.floor((h - k) / 2) + a, q.marginTop = Math.floor((n - l) / 2) + a);
						c.css(q)
					}
				}
			}
		}
	};
	n.rsProto = u.prototype;
	n.fn.royalSlider = function (b) {
		var f = arguments;
		return this.each(function () {
			var c = n(this);
			if ("object" !== typeof b && b) {
				if ((c = c.data("royalSlider")) && c[b]) return c[b].apply(c, Array.prototype.slice.call(f, 1))
			} else c.data("royalSlider") || c.data("royalSlider", new u(c, b))
		})
	};
	n.fn.royalSlider.defaults = {
		slidesSpacing: 8,
		startSlideId: 0,
		loop: !1,
		loopRewind: !1,
		numImagesToPreload: 4,
		fadeinLoadedSlide: !0,
		slidesOrientation: "horizontal",
		transitionType: "move",
		transitionSpeed: 600,
		controlNavigation: "bullets",
		controlsInside: !0,
		arrowsNav: !0,
		arrowsNavAutoHide: !0,
		navigateByClick: !0,
		randomizeSlides: !1,
		sliderDrag: !0,
		sliderTouch: !0,
		keyboardNavEnabled: !1,
		fadeInAfterLoaded: !0,
		allowCSS3: !0,
		allowCSS3OnWebkit: !0,
		addActiveClass: !1,
		autoHeight: !1,
		easeOut: "easeOutSine",
		easeInOut: "easeInOutSine",
		minSlideOffset: 10,
		imageScaleMode: "fit-if-smaller",
		imageAlignCenter: !0,
		imageScalePadding: 4,
		usePreloader: !0,
		autoScaleSlider: !1,
		autoScaleSliderWidth: 800,
		autoScaleSliderHeight: 400,
		autoScaleHeight: !0,
		arrowsNavHideOnTouch: !1,
		globalCaption: !1,
		slidesDiff: 2
	};
	n.rsCSS3Easing = {
		easeOutSine: "cubic-bezier(0.390, 0.575, 0.565, 1.000)",
		easeInOutSine: "cubic-bezier(0.445, 0.050, 0.550, 0.950)"
	};
	n.extend(jQuery.easing, {
		easeInOutSine: function (b, f, c, a, e) {
			return -a / 2 * (Math.cos(Math.PI * f / e) - 1) + c
		},
		easeOutSine: function (b, f, c, a, e) {
			return a * Math.sin(f / e * (Math.PI / 2)) + c
		},
		easeOutCubic: function (b, f, c, a, e) {
			return a * ((f = f / e - 1) * f * f + 1) + c
		}
	})
})(jQuery, window);
// jquery.rs.active-class v1.0.1
(function (c) {
	c.rsProto._o4 = function () {
		var b, a = this;
		if (a.st.addActiveClass) a.ev.on("rsOnUpdateNav", function () {
			b && clearTimeout(b);
			b = setTimeout(function () {
				a._g4 && a._g4.removeClass("rsActiveSlide");
				a._r1 && a._r1.addClass("rsActiveSlide");
				b = null
			}, 50)
		})
	};
	c.rsModules.activeClass = c.rsProto._o4
})(jQuery);
// jquery.rs.animated-blocks v1.0.7
(function (l) {
	l.extend(l.rsProto, {
		_p4: function () {
			function m() {
				var g = a.currSlide;
				if (a.currSlide && a.currSlide.isLoaded && a._t4 !== g) {
					if (0 < a._s4.length) {
						for (b = 0; b < a._s4.length; b++) clearTimeout(a._s4[b]);
						a._s4 = []
					}
					if (0 < a._r4.length) {
						var f;
						for (b = 0; b < a._r4.length; b++)
							if (f = a._r4[b]) a._e ? (f.block.css(a._g + a._u1, "0s"), f.block.css(f.css)) : f.block.stop(!0).css(f.css), a._t4 = null, g.animBlocksDisplayed = !1;
						a._r4 = []
					}
					g.animBlocks && (g.animBlocksDisplayed = !0, a._t4 = g, a._u4(g.animBlocks))
				}
			}
			var a = this,
				b;
			a._q4 = {
				fadeEffect: !0,
				moveEffect: "top",
				moveOffset: 20,
				speed: 400,
				easing: "easeOutSine",
				delay: 200
			};
			a.st.block = l.extend({}, a._q4, a.st.block);
			a._r4 = [];
			a._s4 = [];
			a.ev.on("rsAfterInit", function () {
				m()
			});
			a.ev.on("rsBeforeParseNode", function (a, b, d) {
				b = l(b);
				d.animBlocks = b.find(".rsABlock").css("display", "none");
				d.animBlocks.length || (b.hasClass("rsABlock") ? d.animBlocks = b.css("display", "none") : d.animBlocks = !1)
			});
			a.ev.on("rsAfterContentSet", function (b, f) {
				f.id === a.slides[a.currSlideId].id && setTimeout(function () {
						m()
					}, a.st.fadeinLoadedSlide ?
					300 : 0)
			});
			a.ev.on("rsAfterSlideChange", function () {
				m()
			})
		},
		_v4: function (l, a) {
			setTimeout(function () {
				l.css(a)
			}, 6)
		},
		_u4: function (m) {
			var a = this,
				b, g, f, d, h, e, n;
			a._s4 = [];
			m.each(function (m) {
				b = l(this);
				g = {};
				f = {};
				d = null;
				var c = b.attr("data-move-offset"),
					c = c ? parseInt(c, 10) : a.st.block.moveOffset;
				if (0 < c && ((e = b.data("move-effect")) ? (e = e.toLowerCase(), "none" === e ? e = !1 : "left" !== e && "top" !== e && "bottom" !== e && "right" !== e && (e = a.st.block.moveEffect, "none" === e && (e = !1))) : e = a.st.block.moveEffect, e && "none" !== e)) {
					var p;
					p = "right" ===
						e || "left" === e ? !0 : !1;
					var k;
					n = !1;
					a._e ? (k = 0, h = a._x1) : (p ? isNaN(parseInt(b.css("right"), 10)) ? h = "left" : (h = "right", n = !0) : isNaN(parseInt(b.css("bottom"), 10)) ? h = "top" : (h = "bottom", n = !0), h = "margin-" + h, n && (c = -c), a._e ? k = parseInt(b.css(h), 10) : (k = b.data("rs-start-move-prop"), void 0 === k && (k = parseInt(b.css(h), 10), isNaN(k) && (k = 0), b.data("rs-start-move-prop", k))));
					f[h] = a._m4("top" === e || "left" === e ? k - c : k + c, p);
					g[h] = a._m4(k, p)
				}
				c = b.attr("data-fade-effect");
				if (!c) c = a.st.block.fadeEffect;
				else if ("none" === c.toLowerCase() ||
					"false" === c.toLowerCase()) c = !1;
				c && (f.opacity = 0, g.opacity = 1);
				if (c || e) d = {}, d.hasFade = Boolean(c), Boolean(e) && (d.moveProp = h, d.hasMove = !0), d.speed = b.data("speed"), isNaN(d.speed) && (d.speed = a.st.block.speed), d.easing = b.data("easing"), d.easing || (d.easing = a.st.block.easing), d.css3Easing = l.rsCSS3Easing[d.easing], d.delay = b.data("delay"), isNaN(d.delay) && (d.delay = a.st.block.delay * m);
				c = {};
				a._e && (c[a._g + a._u1] = "0ms");
				c.moveProp = g.moveProp;
				c.opacity = g.opacity;
				c.display = "none";
				a._r4.push({
					block: b,
					css: c
				});
				a._v4(b,
					f);
				a._s4.push(setTimeout(function (b, d, c, e) {
					return function () {
						b.css("display", "block");
						if (c) {
							var g = {};
							if (a._e) {
								var f = "";
								c.hasMove && (f += c.moveProp);
								c.hasFade && (c.hasMove && (f += ", "), f += "opacity");
								g[a._g + a._t1] = f;
								g[a._g + a._u1] = c.speed + "ms";
								g[a._g + a._v1] = c.css3Easing;
								b.css(g);
								setTimeout(function () {
									b.css(d)
								}, 24)
							} else setTimeout(function () {
								b.animate(d, c.speed, c.easing)
							}, 16)
						}
						delete a._s4[e]
					}
				}(b, g, d, m), 6 >= d.delay ? 12 : d.delay))
			})
		}
	});
	l.rsModules.animatedBlocks = l.rsProto._p4
})(jQuery);
// jquery.rs.auto-height v1.0.3
(function (b) {
	b.extend(b.rsProto, {
		_w4: function () {
			var a = this;
			if (a.st.autoHeight) {
				var b, c, e, f = !0,
					d = function (d) {
						e = a.slides[a.currSlideId];
						(b = e.holder) && (c = b.height()) && void 0 !== c && c > (a.st.minAutoHeight || 30) && (a._c4 = c, a._e || !d ? a._e1.css("height", c) : a._e1.stop(!0, !0).animate({
							height: c
						}, a.st.transitionSpeed), a.ev.trigger("rsAutoHeightChange", c), f && (a._e && setTimeout(function () {
							a._e1.css(a._g + "transition", "height " + a.st.transitionSpeed + "ms ease-in-out")
						}, 16), f = !1))
					};
				a.ev.on("rsMaybeSizeReady.rsAutoHeight",
					function (a, b) {
						e === b && d()
					});
				a.ev.on("rsAfterContentSet.rsAutoHeight", function (a, b) {
					e === b && d()
				});
				a.slider.addClass("rsAutoHeight");
				a.ev.one("rsAfterInit", function () {
					setTimeout(function () {
						d(!1);
						setTimeout(function () {
							a.slider.append('<div style="clear:both; float: none;"></div>')
						}, 16)
					}, 16)
				});
				a.ev.on("rsBeforeAnimStart", function () {
					d(!0)
				});
				a.ev.on("rsBeforeSizeSet", function () {
					setTimeout(function () {
						d(!1)
					}, 16)
				})
			}
		}
	});
	b.rsModules.autoHeight = b.rsProto._w4
})(jQuery);
// jquery.rs.autoplay v1.0.5
(function (b) {
	b.extend(b.rsProto, {
		_x4: function () {
			var a = this,
				d;
			a._y4 = {
				enabled: !1,
				stopAtAction: !0,
				pauseOnHover: !0,
				delay: 2E3
			};
			!a.st.autoPlay && a.st.autoplay && (a.st.autoPlay = a.st.autoplay);
			a.st.autoPlay = b.extend({}, a._y4, a.st.autoPlay);
			a.st.autoPlay.enabled && (a.ev.on("rsBeforeParseNode", function (a, c, f) {
				c = b(c);
				if (d = c.attr("data-rsDelay")) f.customDelay = parseInt(d, 10)
			}), a.ev.one("rsAfterInit", function () {
				a._z4()
			}), a.ev.on("rsBeforeDestroy", function () {
				a.stopAutoPlay();
				a.slider.off("mouseenter mouseleave");
				b(window).off("blur" +
					a.ns + " focus" + a.ns)
			}))
		},
		_z4: function () {
			var a = this;
			a.startAutoPlay();
			a.ev.on("rsAfterContentSet", function (b, e) {
				a._l2 || a._r2 || !a._a5 || e !== a.currSlide || a._b5()
			});
			a.ev.on("rsDragRelease", function () {
				a._a5 && a._c5 && (a._c5 = !1, a._b5())
			});
			a.ev.on("rsAfterSlideChange", function () {
				a._a5 && a._c5 && (a._c5 = !1, a.currSlide.isLoaded && a._b5())
			});
			a.ev.on("rsDragStart", function () {
				a._a5 && (a.st.autoPlay.stopAtAction ? a.stopAutoPlay() : (a._c5 = !0, a._d5()))
			});
			a.ev.on("rsBeforeMove", function (b, e, c) {
				a._a5 && (c && a.st.autoPlay.stopAtAction ?
					a.stopAutoPlay() : (a._c5 = !0, a._d5()))
			});
			a._e5 = !1;
			a.ev.on("rsVideoStop", function () {
				a._a5 && (a._e5 = !1, a._b5())
			});
			a.ev.on("rsVideoPlay", function () {
				a._a5 && (a._c5 = !1, a._d5(), a._e5 = !0)
			});
			b(window).on("blur" + a.ns, function () {
				a._a5 && (a._c5 = !0, a._d5())
			}).on("focus" + a.ns, function () {
				a._a5 && a._c5 && (a._c5 = !1, a._b5())
			});
			a.st.autoPlay.pauseOnHover && (a._f5 = !1, a.slider.hover(function () {
				a._a5 && (a._c5 = !1, a._d5(), a._f5 = !0)
			}, function () {
				a._a5 && (a._f5 = !1, a._b5())
			}))
		},
		toggleAutoPlay: function () {
			this._a5 ? this.stopAutoPlay() :
				this.startAutoPlay()
		},
		startAutoPlay: function () {
			this._a5 = !0;
			this.currSlide.isLoaded && this._b5()
		},
		stopAutoPlay: function () {
			this._e5 = this._f5 = this._c5 = this._a5 = !1;
			this._d5()
		},
		_b5: function () {
			var a = this;
			a._f5 || a._e5 || (a._g5 = !0, a._h5 && clearTimeout(a._h5), a._h5 = setTimeout(function () {
				var b;
				a._z || a.st.loopRewind || (b = !0, a.st.loopRewind = !0);
				a.next(!0);
				b && (a.st.loopRewind = !1)
			}, a.currSlide.customDelay ? a.currSlide.customDelay : a.st.autoPlay.delay))
		},
		_d5: function () {
			this._f5 || this._e5 || (this._g5 = !1, this._h5 && (clearTimeout(this._h5),
				this._h5 = null))
		}
	});
	b.rsModules.autoplay = b.rsProto._x4
})(jQuery);
// jquery.rs.bullets v1.0.1
(function (c) {
	c.extend(c.rsProto, {
		_i5: function () {
			var a = this;
			"bullets" === a.st.controlNavigation && (a.ev.one("rsAfterPropsSetup", function () {
				a._j5 = !0;
				a.slider.addClass("rsWithBullets");
				for (var b = '<div class="rsNav rsBullets">', e = 0; e < a.numSlides; e++) b += '<div class="rsNavItem rsBullet"><span></span></div>';
				a._k5 = b = c(b + "</div>");
				a._l5 = b.appendTo(a.slider).children();
				a._k5.on("click.rs", ".rsNavItem", function (b) {
					a._m5 || a.goTo(c(this).index())
				})
			}), a.ev.on("rsOnAppendSlide", function (b, c, d) {
				d >= a.numSlides ? a._k5.append('<div class="rsNavItem rsBullet"><span></span></div>') :
					a._l5.eq(d).before('<div class="rsNavItem rsBullet"><span></span></div>');
				a._l5 = a._k5.children()
			}), a.ev.on("rsOnRemoveSlide", function (b, c) {
				var d = a._l5.eq(c);
				d && d.length && (d.remove(), a._l5 = a._k5.children())
			}), a.ev.on("rsOnUpdateNav", function () {
				var b = a.currSlideId;
				a._n5 && a._n5.removeClass("rsNavSelected");
				b = a._l5.eq(b);
				b.addClass("rsNavSelected");
				a._n5 = b
			}))
		}
	});
	c.rsModules.bullets = c.rsProto._i5
})(jQuery);
// jquery.rs.deeplinking v1.0.6 + jQuery hashchange plugin v1.3 Copyright (c) 2010 Ben Alman
(function (d) {
	d.extend(d.rsProto, {
		_o5: function () {
			var a = this,
				l, g, f;
			a._p5 = {
				enabled: !1,
				change: !1,
				prefix: ""
			};
			a.st.deeplinking = d.extend({}, a._p5, a.st.deeplinking);
			if (a.st.deeplinking.enabled) {
				var k = a.st.deeplinking.change,
					c = a.st.deeplinking.prefix,
					e = "#" + c,
					h = function () {
						var b = window.location.hash;
						return b && 0 < b.indexOf(c) && (b = parseInt(b.substring(e.length), 10), 0 <= b) ? b - 1 : -1
					},
					m = h(); - 1 !== m && (a.st.startSlideId = m);
				k && (d(window).on("hashchange" + a.ns, function (b) {
					l || (b = h(), 0 > b || (b > a.numSlides - 1 && (b = a.numSlides - 1),
						a.goTo(b)))
				}), a.ev.on("rsBeforeAnimStart", function () {
					g && clearTimeout(g);
					f && clearTimeout(f)
				}), a.ev.on("rsAfterSlideChange", function () {
					g && clearTimeout(g);
					f && clearTimeout(f);
					f = setTimeout(function () {
						l = !0;
						window.location.replace(("" + window.location).split("#")[0] + e + (a.currSlideId + 1));
						g = setTimeout(function () {
							l = !1;
							g = null
						}, 60)
					}, 400)
				}));
				a.ev.on("rsBeforeDestroy", function () {
					g = f = null;
					k && d(window).off("hashchange" + a.ns)
				})
			}
		}
	});
	d.rsModules.deeplinking = d.rsProto._o5
})(jQuery);
(function (d, a, l) {
	function g(b) {
		b = b || location.href;
		return "#" + b.replace(/^[^#]*#?(.*)$/, "$1")
	}
	"$:nomunge";
	var f = "hashchange",
		k = document,
		c, e = d.event.special,
		h = k.documentMode,
		m = "on" + f in a && (h === l || 7 < h);
	d.fn[f] = function (b) {
		return b ? this.bind(f, b) : this.trigger(f)
	};
	d.fn[f].delay = 50;
	e[f] = d.extend(e[f], {
		setup: function () {
			if (m) return !1;
			d(c.start)
		},
		teardown: function () {
			if (m) return !1;
			d(c.stop)
		}
	});
	c = function () {
		function b() {
			var c = g(),
				n = r(h);
			c !== h ? (p(h = c, n), d(a).trigger(f)) : n !== h && (location.href = location.href.replace(/#.*/,
				"") + n);
			e = setTimeout(b, d.fn[f].delay)
		}
		var c = {},
			e, h = g(),
			q = function (b) {
				return b
			},
			p = q,
			r = q;
		c.start = function () {
			e || b()
		};
		c.stop = function () {
			e && clearTimeout(e);
			e = l
		};
		a.attachEvent && !a.addEventListener && !m && function () {
			var a, e;
			c.start = function () {
				a || (e = (e = d.fn[f].src) && e + g(), a = d('<iframe tabindex="-1" title="empty"/>').hide().one("load", function () {
					e || p(g());
					b()
				}).attr("src", e || "javascript:0").insertAfter("body")[0].contentWindow, k.onpropertychange = function () {
					try {
						"title" === event.propertyName && (a.document.title =
							k.title)
					} catch (b) {}
				})
			};
			c.stop = q;
			r = function () {
				return g(a.location.href)
			};
			p = function (b, e) {
				var c = a.document,
					g = d.fn[f].domain;
				b !== e && (c.title = k.title, c.open(), g && c.write('<script>document.domain="' + g + '"\x3c/script>'), c.close(), a.location.hash = b)
			}
		}();
		return c
	}()
})(jQuery, this);
// jquery.rs.fullscreen v1.0.6
(function (c) {
	c.extend(c.rsProto, {
		_q5: function () {
			var a = this;
			a._r5 = {
				enabled: !1,
				keyboardNav: !0,
				buttonFS: !0,
				nativeFS: !1,
				doubleTap: !0
			};
			a.st.fullscreen = c.extend({}, a._r5, a.st.fullscreen);
			if (a.st.fullscreen.enabled) a.ev.one("rsBeforeSizeSet", function () {
				a._s5()
			})
		},
		_s5: function () {
			var a = this;
			a._t5 = !a.st.keyboardNavEnabled && a.st.fullscreen.keyboardNav;
			if (a.st.fullscreen.nativeFS) {
				var b = {
						supportsFullScreen: !1,
						isFullScreen: function () {
							return !1
						},
						requestFullScreen: function () {},
						cancelFullScreen: function () {},
						fullScreenEventName: "",
						prefix: ""
					},
					d = ["webkit", "moz", "o", "ms", "khtml"];
				if ("undefined" != typeof document.cancelFullScreen) b.supportsFullScreen = !0;
				else
					for (var e = 0, f = d.length; e < f; e++)
						if (b.prefix = d[e], "undefined" != typeof document[b.prefix + "CancelFullScreen"]) {
							b.supportsFullScreen = !0;
							break
						}
				b.supportsFullScreen ? (a.nativeFS = !0, b.fullScreenEventName = b.prefix + "fullscreenchange" + a.ns, b.isFullScreen = function () {
					switch (this.prefix) {
						case "":
							return document.fullScreen;
						case "webkit":
							return document.webkitIsFullScreen;
						default:
							return document[this.prefix +
								"FullScreen"]
					}
				}, b.requestFullScreen = function (a) {
					return "" === this.prefix ? a.requestFullScreen() : a[this.prefix + "RequestFullScreen"]()
				}, b.cancelFullScreen = function (a) {
					return "" === this.prefix ? document.cancelFullScreen() : document[this.prefix + "CancelFullScreen"]()
				}, a._u5 = b) : a._u5 = !1
			}
			a.st.fullscreen.buttonFS && (a._v5 = c('<div class="rsFullscreenBtn"><div class="rsFullscreenIcn"></div></div>').appendTo(a._o1).on("click.rs", function () {
				a.isFullscreen ? a.exitFullscreen() : a.enterFullscreen()
			}))
		},
		enterFullscreen: function (a) {
			var b =
				this;
			if (b._u5)
				if (a) b._u5.requestFullScreen(c("html")[0]);
				else {
					b._b.on(b._u5.fullScreenEventName, function (a) {
						b._u5.isFullScreen() ? b.enterFullscreen(!0) : b.exitFullscreen(!0)
					});
					b._u5.requestFullScreen(c("html")[0]);
					return
				}
			if (!b._w5) {
				b._w5 = !0;
				b._b.on("keyup" + b.ns + "fullscreen", function (a) {
					27 === a.keyCode && b.exitFullscreen()
				});
				b._t5 && b._b2();
				a = c(window);
				b._x5 = a.scrollTop();
				b._y5 = a.scrollLeft();
				b._z5 = c("html").attr("style");
				b._a6 = c("body").attr("style");
				b._b6 = b.slider.attr("style");
				c("body, html").css({
					overflow: "hidden",
					height: "100%",
					width: "100%",
					margin: "0",
					padding: "0"
				});
				b.slider.addClass("rsFullscreen");
				var d;
				for (d = 0; d < b.numSlides; d++) a = b.slides[d], a.isRendered = !1, a.bigImage && (a.isBig = !0, a.isMedLoaded = a.isLoaded, a.isMedLoading = a.isLoading, a.medImage = a.image, a.medIW = a.iW, a.medIH = a.iH, a.slideId = -99, a.bigImage !== a.medImage && (a.sizeType = "big"), a.isLoaded = a.isBigLoaded, a.isLoading = !1, a.image = a.bigImage, a.images[0] = a.bigImage, a.iW = a.bigIW, a.iH = a.bigIH, a.isAppended = a.contentAdded = !1, b._c6(a));
				b.isFullscreen = !0;
				b._w5 = !1;
				b.updateSliderSize();
				b.ev.trigger("rsEnterFullscreen")
			}
		},
		exitFullscreen: function (a) {
			var b = this;
			if (b._u5) {
				if (!a) {
					b._u5.cancelFullScreen(c("html")[0]);
					return
				}
				b._b.off(b._u5.fullScreenEventName)
			}
			if (!b._w5) {
				b._w5 = !0;
				b._b.off("keyup" + b.ns + "fullscreen");
				b._t5 && b._b.off("keydown" + b.ns);
				c("html").attr("style", b._z5 || "");
				c("body").attr("style", b._a6 || "");
				var d;
				for (d = 0; d < b.numSlides; d++) a = b.slides[d], a.isRendered = !1, a.bigImage && (a.isBig = !1, a.slideId = -99, a.isBigLoaded = a.isLoaded, a.isBigLoading = a.isLoading, a.bigImage =
					a.image, a.bigIW = a.iW, a.bigIH = a.iH, a.isLoaded = a.isMedLoaded, a.isLoading = !1, a.image = a.medImage, a.images[0] = a.medImage, a.iW = a.medIW, a.iH = a.medIH, a.isAppended = a.contentAdded = !1, b._c6(a, !0), a.bigImage !== a.medImage && (a.sizeType = "med"));
				b.isFullscreen = !1;
				a = c(window);
				a.scrollTop(b._x5);
				a.scrollLeft(b._y5);
				b._w5 = !1;
				b.slider.removeClass("rsFullscreen");
				b.updateSliderSize();
				setTimeout(function () {
					b.updateSliderSize()
				}, 1);
				b.ev.trigger("rsExitFullscreen")
			}
		},
		_c6: function (a, b) {
			var d = a.isLoaded || a.isLoading ? '<img class="rsImg rsMainSlideImage" src="' +
				a.image + '"/>' : '<a class="rsImg rsMainSlideImage" href="' + a.image + '"></a>';
			a.content.hasClass("rsImg") ? a.content = c(d) : a.content.find(".rsImg").eq(0).replaceWith(d);
			a.isLoaded || a.isLoading || !a.holder || a.holder.html(a.content)
		}
	});
	c.rsModules.fullscreen = c.rsProto._q5
})(jQuery);
// jquery.rs.global-caption v1.0
(function (b) {
	b.extend(b.rsProto, {
		_d6: function () {
			var a = this;
			a.st.globalCaption && (a.ev.on("rsAfterInit", function () {
				a.globalCaption = b('<div class="rsGCaption"></div>').appendTo(a.st.globalCaptionInside ? a._e1 : a.slider);
				a.globalCaption.html(a.currSlide.caption)
			}), a.ev.on("rsBeforeAnimStart", function () {
				a.globalCaption.html(a.currSlide.caption)
			}))
		}
	});
	b.rsModules.globalCaption = b.rsProto._d6
})(jQuery);
// jquery.rs.nav-auto-hide v1.0
(function (b) {
	b.extend(b.rsProto, {
		_e6: function () {
			var a = this;
			if (a.st.navAutoHide && !a.hasTouch) a.ev.one("rsAfterInit", function () {
				if (a._k5) {
					a._k5.addClass("rsHidden");
					var b = a.slider;
					b.one("mousemove.controlnav", function () {
						a._k5.removeClass("rsHidden")
					});
					b.hover(function () {
						a._k5.removeClass("rsHidden")
					}, function () {
						a._k5.addClass("rsHidden")
					})
				}
			})
		}
	});
	b.rsModules.autoHideNav = b.rsProto._e6
})(jQuery);
// jquery.rs.tabs v1.0.2
(function (e) {
	e.extend(e.rsProto, {
		_f6: function () {
			var a = this;
			"tabs" === a.st.controlNavigation && (a.ev.on("rsBeforeParseNode", function (a, d, b) {
				d = e(d);
				b.thumbnail = d.find(".rsTmb").remove();
				b.thumbnail.length ? b.thumbnail = e(document.createElement("div")).append(b.thumbnail).html() : (b.thumbnail = d.attr("data-rsTmb"), b.thumbnail || (b.thumbnail = d.find(".rsImg").attr("data-rsTmb")), b.thumbnail = b.thumbnail ? '<img src="' + b.thumbnail + '"/>' : "")
			}), a.ev.one("rsAfterPropsSetup", function () {
				a._g6()
			}), a.ev.on("rsOnAppendSlide",
				function (c, d, b) {
					b >= a.numSlides ? a._k5.append('<div class="rsNavItem rsTab">' + d.thumbnail + "</div>") : a._l5.eq(b).before('<div class="rsNavItem rsTab">' + item.thumbnail + "</div>");
					a._l5 = a._k5.children()
				}), a.ev.on("rsOnRemoveSlide", function (c, d) {
				var b = a._l5.eq(d);
				b && (b.remove(), a._l5 = a._k5.children())
			}), a.ev.on("rsOnUpdateNav", function () {
				var c = a.currSlideId;
				a._n5 && a._n5.removeClass("rsNavSelected");
				c = a._l5.eq(c);
				c.addClass("rsNavSelected");
				a._n5 = c
			}))
		},
		_g6: function () {
			var a = this,
				c;
			a._j5 = !0;
			c = '<div class="rsNav rsTabs">';
			for (var d = 0; d < a.numSlides; d++) c += '<div class="rsNavItem rsTab">' + a.slides[d].thumbnail + "</div>";
			c = e(c + "</div>");
			a._k5 = c;
			a._l5 = c.children(".rsNavItem");
			a.slider.append(c);
			a._k5.click(function (b) {
				b = e(b.target).closest(".rsNavItem");
				b.length && a.goTo(b.index())
			})
		}
	});
	e.rsModules.tabs = e.rsProto._f6
})(jQuery);
// jquery.rs.thumbnails v1.0.7
(function (f) {
	f.extend(f.rsProto, {
		_h6: function () {
			var a = this;
			"thumbnails" === a.st.controlNavigation && (a._i6 = {
				drag: !0,
				touch: !0,
				orientation: "horizontal",
				navigation: !0,
				arrows: !0,
				arrowLeft: null,
				arrowRight: null,
				spacing: 4,
				arrowsAutoHide: !1,
				appendSpan: !1,
				transitionSpeed: 600,
				autoCenter: !0,
				fitInViewport: !0,
				firstMargin: !0,
				paddingTop: 0,
				paddingBottom: 0
			}, a.st.thumbs = f.extend({}, a._i6, a.st.thumbs), a._j6 = !0, !1 === a.st.thumbs.firstMargin ? a.st.thumbs.firstMargin = 0 : !0 === a.st.thumbs.firstMargin && (a.st.thumbs.firstMargin =
				a.st.thumbs.spacing), a.ev.on("rsBeforeParseNode", function (a, b, c) {
				b = f(b);
				c.thumbnail = b.find(".rsTmb").remove();
				c.thumbnail.length ? c.thumbnail = f(document.createElement("div")).append(c.thumbnail).html() : (c.thumbnail = b.attr("data-rsTmb"), c.thumbnail || (c.thumbnail = b.find(".rsImg").attr("data-rsTmb")), c.thumbnail = c.thumbnail ? '<img src="' + c.thumbnail + '"/>' : "")
			}), a.ev.one("rsAfterPropsSetup", function () {
				a._k6()
			}), a._n5 = null, a.ev.on("rsOnUpdateNav", function () {
				var e = f(a._l5[a.currSlideId]);
				e !== a._n5 && (a._n5 &&
					(a._n5.removeClass("rsNavSelected"), a._n5 = null), a._l6 && a._m6(a.currSlideId), a._n5 = e.addClass("rsNavSelected"))
			}), a.ev.on("rsOnAppendSlide", function (e, b, c) {
				e = "<div" + a._n6 + ' class="rsNavItem rsThumb">' + a._o6 + b.thumbnail + "</div>";
				a._e && a._s3.css(a._g + "transition-duration", "0ms");
				c >= a.numSlides ? a._s3.append(e) : a._l5.eq(c).before(e);
				a._l5 = a._s3.children();
				a.updateThumbsSize(!0)
			}), a.ev.on("rsOnRemoveSlide", function (e, b) {
				var c = a._l5.eq(b);
				c && (a._e && a._s3.css(a._g + "transition-duration", "0ms"), c.remove(),
					a._l5 = a._s3.children(), a.updateThumbsSize(!0))
			}))
		},
		_k6: function () {
			var a = this,
				e = "rsThumbs",
				b = a.st.thumbs,
				c = "",
				g, d, h = b.spacing;
			a._j5 = !0;
			a._e3 = "vertical" === b.orientation ? !1 : !0;
			a._n6 = g = h ? ' style="margin-' + (a._e3 ? "right" : "bottom") + ":" + h + 'px;"' : "";
			a._i3 = 0;
			a._p6 = !1;
			a._m5 = !1;
			a._l6 = !1;
			a._q6 = b.arrows && b.navigation;
			d = a._e3 ? "Hor" : "Ver";
			a.slider.addClass("rsWithThumbs rsWithThumbs" + d);
			c += '<div class="rsNav rsThumbs rsThumbs' + d + '"><div class="' + e + 'Container">';
			a._o6 = b.appendSpan ? '<span class="thumbIco"></span>' :
				"";
			for (var k = 0; k < a.numSlides; k++) d = a.slides[k], c += "<div" + g + ' class="rsNavItem rsThumb">' + d.thumbnail + a._o6 + "</div>";
			c = f(c + "</div></div>");
			g = {};
			b.paddingTop && (g[a._e3 ? "paddingTop" : "paddingLeft"] = b.paddingTop);
			b.paddingBottom && (g[a._e3 ? "paddingBottom" : "paddingRight"] = b.paddingBottom);
			c.css(g);
			a._s3 = f(c).find("." + e + "Container");
			a._q6 && (e += "Arrow", b.arrowLeft ? a._r6 = b.arrowLeft : (a._r6 = f('<div class="' + e + " " + e + 'Left"><div class="' + e + 'Icn"></div></div>'), c.append(a._r6)), b.arrowRight ? a._s6 = b.arrowRight :
				(a._s6 = f('<div class="' + e + " " + e + 'Right"><div class="' + e + 'Icn"></div></div>'), c.append(a._s6)), a._r6.click(function () {
					var b = (Math.floor(a._i3 / a._t6) + a._u6) * a._t6 + a.st.thumbs.firstMargin;
					a._a4(b > a._n3 ? a._n3 : b)
				}), a._s6.click(function () {
					var b = (Math.floor(a._i3 / a._t6) - a._u6) * a._t6 + a.st.thumbs.firstMargin;
					a._a4(b < a._o3 ? a._o3 : b)
				}), b.arrowsAutoHide && !a.hasTouch && (a._r6.css("opacity", 0), a._s6.css("opacity", 0), c.one("mousemove.rsarrowshover", function () {
						a._l6 && (a._r6.css("opacity", 1), a._s6.css("opacity", 1))
					}),
					c.hover(function () {
						a._l6 && (a._r6.css("opacity", 1), a._s6.css("opacity", 1))
					}, function () {
						a._l6 && (a._r6.css("opacity", 0), a._s6.css("opacity", 0))
					})));
			a._k5 = c;
			a._l5 = a._s3.children();
			a.msEnabled && a.st.thumbs.navigation && a._s3.css("-ms-touch-action", a._e3 ? "pan-y" : "pan-x");
			a.slider.append(c);
			a._w3 = !0;
			a._v6 = h;
			b.navigation && a._e && a._s3.css(a._g + "transition-property", a._g + "transform");
			a._k5.on("click.rs", ".rsNavItem", function (b) {
				a._m5 || a.goTo(f(this).index())
			});
			a.ev.off("rsBeforeSizeSet.thumbs").on("rsBeforeSizeSet.thumbs",
				function () {
					a._w6 = a._e3 ? a._c4 : a._b4;
					a.updateThumbsSize(!0)
				});
			a.ev.off("rsAutoHeightChange.thumbs").on("rsAutoHeightChange.thumbs", function (b, c) {
				a.updateThumbsSize(!0, c)
			})
		},
		updateThumbsSize: function (a, e) {
			var b = this,
				c = b._l5.first(),
				f = {},
				d = b._l5.length;
			b._t6 = (b._e3 ? c.outerWidth() : c.outerHeight()) + b._v6;
			b._y3 = d * b._t6 - b._v6;
			f[b._e3 ? "width" : "height"] = b._y3 + b._v6;
			b._z3 = b._e3 ? b._k5.width() : void 0 !== e ? e : b._k5.height();
			b._w3 && (b.isFullscreen || b.st.thumbs.fitInViewport) && (b._e3 ? b._c4 = b._w6 - b._k5.outerHeight() :
				b._b4 = b._w6 - b._k5.outerWidth());
			b._z3 && (b._o3 = -(b._y3 - b._z3) - b.st.thumbs.firstMargin, b._n3 = b.st.thumbs.firstMargin, b._u6 = Math.floor(b._z3 / b._t6), b._y3 < b._z3 ? (b.st.thumbs.autoCenter && b._q3((b._z3 - b._y3) / 2), b.st.thumbs.arrows && b._r6 && (b._r6.addClass("rsThumbsArrowDisabled"), b._s6.addClass("rsThumbsArrowDisabled")), b._l6 = !1, b._m5 = !1, b._k5.off(b._j1)) : b.st.thumbs.navigation && !b._l6 && (b._l6 = !0, !b.hasTouch && b.st.thumbs.drag || b.hasTouch && b.st.thumbs.touch) && (b._m5 = !0, b._k5.on(b._j1, function (a) {
					b._g2(a, !0)
				})),
				b._s3.css(f), a && e && b._m6(b.currSlideId, !0))
		},
		setThumbsOrientation: function (a, e) {
			this._w3 && (this.st.thumbs.orientation = a, this._k5.remove(), this.slider.removeClass("rsWithThumbsHor rsWithThumbsVer"), this._k6(), this._k5.off(this._j1), e || this.updateSliderSize(!0))
		},
		_q3: function (a) {
			this._i3 = a;
			this._e ? this._s3.css(this._x1, this._y1 + (this._e3 ? a + this._z1 + 0 : 0 + this._z1 + a) + this._a2) : this._s3.css(this._e3 ? this._x1 : this._w1, a)
		},
		_a4: function (a, e, b, c, g) {
			var d = this;
			if (d._l6) {
				e || (e = d.st.thumbs.transitionSpeed);
				d._i3 =
					a;
				d._x6 && clearTimeout(d._x6);
				d._p6 && (d._e || d._s3.stop(), b = !0);
				var h = {};
				d._p6 = !0;
				d._e ? (h[d._g + "transition-duration"] = e + "ms", h[d._g + "transition-timing-function"] = b ? f.rsCSS3Easing[d.st.easeOut] : f.rsCSS3Easing[d.st.easeInOut], d._s3.css(h), d._q3(a)) : (h[d._e3 ? d._x1 : d._w1] = a + "px", d._s3.animate(h, e, b ? "easeOutCubic" : d.st.easeInOut));
				c && (d._i3 = c);
				d._y6();
				d._x6 = setTimeout(function () {
					d._p6 = !1;
					g && (d._a4(c, g, !0), g = null)
				}, e)
			}
		},
		_y6: function () {
			this._q6 && (this._i3 === this._n3 ? this._r6.addClass("rsThumbsArrowDisabled") :
				this._r6.removeClass("rsThumbsArrowDisabled"), this._i3 === this._o3 ? this._s6.addClass("rsThumbsArrowDisabled") : this._s6.removeClass("rsThumbsArrowDisabled"))
		},
		_m6: function (a, e) {
			var b = 0,
				c, f = a * this._t6 + 2 * this._t6 - this._v6 + this._n3,
				d = Math.floor(this._i3 / this._t6);
			this._l6 && (this._j6 && (e = !0, this._j6 = !1), f + this._i3 > this._z3 ? (a === this.numSlides - 1 && (b = 1), d = -a + this._u6 - 2 + b, c = d * this._t6 + this._z3 % this._t6 + this._v6 - this._n3) : 0 !== a ? (a - 1) * this._t6 <= -this._i3 + this._n3 && a - 1 <= this.numSlides - this._u6 && (c = (-a + 1) * this._t6 +
				this._n3) : c = this._n3, c !== this._i3 && (b = void 0 === c ? this._i3 : c, b > this._n3 ? this._q3(this._n3) : b < this._o3 ? this._q3(this._o3) : void 0 !== c && (e ? this._q3(c) : this._a4(c))), this._y6())
		}
	});
	f.rsModules.thumbnails = f.rsProto._h6
})(jQuery);
// jquery.rs.video v1.1.3
(function (f) {
	f.extend(f.rsProto, {
		_z6: function () {
			var a = this;
			a._a7 = {
				autoHideArrows: !0,
				autoHideControlNav: !1,
				autoHideBlocks: !1,
				autoHideCaption: !1,
				disableCSS3inFF: !0,
				youTubeCode: '<iframe src="http://www.youtube.com/embed/%id%?rel=1&showinfo=0&autoplay=1&wmode=transparent" frameborder="no"></iframe>',
				vimeoCode: '<iframe src="http://player.vimeo.com/video/%id%?byline=0&portrait=0&autoplay=1" frameborder="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'
			};
			a.st.video = f.extend({}, a._a7,
				a.st.video);
			a.ev.on("rsBeforeSizeSet", function () {
				a._b7 && setTimeout(function () {
					var b = a._r1,
						b = b.hasClass("rsVideoContainer") ? b : b.find(".rsVideoContainer");
					a._c7 && a._c7.css({
						width: b.width(),
						height: b.height()
					})
				}, 32)
			});
			var d = a._a.mozilla;
			a.ev.on("rsAfterParseNode", function (b, c, e) {
				b = f(c);
				if (e.videoURL) {
					a.st.video.disableCSS3inFF && d && (a._e = a._f = !1);
					c = f('<div class="rsVideoContainer"></div>');
					var g = f('<div class="rsBtnCenterer"><div class="rsPlayBtn"><div class="rsPlayBtnIcon"></div></div></div>');
					b.hasClass("rsImg") ?
						e.content = c.append(b).append(g) : e.content.find(".rsImg").wrap(c).after(g)
				}
			});
			a.ev.on("rsAfterSlideChange", function () {
				a.stopVideo()
			})
		},
		toggleVideo: function () {
			return this._b7 ? this.stopVideo() : this.playVideo()
		},
		playVideo: function () {
			var a = this;
			if (!a._b7) {
				var d = a.currSlide;
				if (!d.videoURL) return !1;
				a._d7 = d;
				var b = a._e7 = d.content,
					d = d.videoURL,
					c, e;
				d.match(/youtu\.be/i) || d.match(/youtube\.com/i) ? (e = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/, (e = d.match(e)) && 11 == e[7].length &&
					(c = e[7]), void 0 !== c && (a._c7 = a.st.video.youTubeCode.replace("%id%", c))) : d.match(/vimeo\.com/i) && (e = /(www\.)?vimeo.com\/(\d+)($|\/)/, (e = d.match(e)) && (c = e[2]), void 0 !== c && (a._c7 = a.st.video.vimeoCode.replace("%id%", c)));
				a.videoObj = f(a._c7);
				a.ev.trigger("rsOnCreateVideoElement", [d]);
				a.videoObj.length && (a._c7 = f('<div class="rsVideoFrameHolder"><div class="rsPreloader"></div><div class="rsCloseVideoBtn"><div class="rsCloseVideoIcn"></div></div></div>'), a._c7.find(".rsPreloader").after(a.videoObj), b = b.hasClass("rsVideoContainer") ?
					b : b.find(".rsVideoContainer"), a._c7.css({
						width: b.width(),
						height: b.height()
					}).find(".rsCloseVideoBtn").off("click.rsv").on("click.rsv", function (b) {
						a.stopVideo();
						b.preventDefault();
						b.stopPropagation();
						return !1
					}), b.append(a._c7), a.isIPAD && b.addClass("rsIOSVideo"), a._f7(!1), setTimeout(function () {
						a._c7.addClass("rsVideoActive")
					}, 10), a.ev.trigger("rsVideoPlay"), a._b7 = !0);
				return !0
			}
			return !1
		},
		stopVideo: function () {
			var a = this;
			return a._b7 ? (a.isIPAD && a.slider.find(".rsCloseVideoBtn").remove(), a._f7(!0), setTimeout(function () {
				a.ev.trigger("rsOnDestroyVideoElement", [a.videoObj]);
				var d = a._c7.find("iframe");
				if (d.length) try {
					d.attr("src", "")
				} catch (b) {}
				a._c7.remove();
				a._c7 = null
			}, 16), a.ev.trigger("rsVideoStop"), a._b7 = !1, !0) : !1
		},
		_f7: function (a, d) {
			var b = [],
				c = this.st.video;
			c.autoHideArrows && (this._c2 && (b.push(this._c2, this._d2), this._e2 = !a), this._v5 && b.push(this._v5));
			c.autoHideControlNav && this._k5 && b.push(this._k5);
			c.autoHideBlocks && this._d7.animBlocks && b.push(this._d7.animBlocks);
			c.autoHideCaption && this.globalCaption && b.push(this.globalCaption);
			this.slider[a ? "removeClass" :
				"addClass"]("rsVideoPlaying");
			if (b.length)
				for (c = 0; c < b.length; c++) a ? b[c].removeClass("rsHidden") : b[c].addClass("rsHidden")
		}
	});
	f.rsModules.video = f.rsProto._z6
})(jQuery);
// jquery.rs.visible-nearby v1.0.2
(function (d) {
	d.rsProto._g7 = function () {
		var a = this;
		a.st.visibleNearby && a.st.visibleNearby.enabled && (a._h7 = {
			enabled: !0,
			centerArea: 0.6,
			center: !0,
			breakpoint: 0,
			breakpointCenterArea: 0.8,
			hiddenOverflow: !0,
			navigateByCenterClick: !1
		}, a.st.visibleNearby = d.extend({}, a._h7, a.st.visibleNearby), a.ev.one("rsAfterPropsSetup", function () {
			a._i7 = a._e1.css("overflow", "visible").wrap('<div class="rsVisibleNearbyWrap"></div>').parent();
			a.st.visibleNearby.hiddenOverflow || a._i7.css("overflow", "visible");
			a._o1 = a.st.controlsInside ?
				a._i7 : a.slider
		}), a.ev.on("rsAfterSizePropSet", function () {
			var b, c = a.st.visibleNearby;
			b = c.breakpoint && a.width < c.breakpoint ? c.breakpointCenterArea : c.centerArea;
			a._h ? (a._b4 *= b, a._i7.css({
				height: a._c4,
				width: a._b4 / b
			}), a._d = a._b4 * (1 - b) / 2 / b) : (a._c4 *= b, a._i7.css({
				height: a._c4 / b,
				width: a._b4
			}), a._d = a._c4 * (1 - b) / 2 / b);
			c.navigateByCenterClick || (a._q = a._h ? a._b4 : a._c4);
			c.center && a._e1.css("margin-" + (a._h ? "left" : "top"), a._d)
		}))
	};
	d.rsModules.visibleNearby = d.rsProto._g7
})(jQuery);

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.5.9
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
! function (a) {
	"use strict";
	"function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function (a) {
	"use strict";
	var b = window.Slick || {};
	b = function () {
		function c(c, d) {
			var f, e = this;
			e.defaults = {
				accessibility: !0,
				adaptiveHeight: !1,
				appendArrows: a(c),
				appendDots: a(c),
				arrows: !0,
				asNavFor: null,
				prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
				nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
				autoplay: !1,
				autoplaySpeed: 3e3,
				centerMode: !1,
				centerPadding: "50px",
				cssEase: "ease",
				customPaging: function (a, b) {
					return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (b + 1) + "</button>"
				},
				dots: !1,
				dotsClass: "slick-dots",
				draggable: !0,
				easing: "linear",
				edgeFriction: .35,
				fade: !1,
				focusOnSelect: !1,
				infinite: !0,
				initialSlide: 0,
				lazyLoad: "ondemand",
				mobileFirst: !1,
				pauseOnHover: !0,
				pauseOnDotsHover: !1,
				respondTo: "window",
				responsive: null,
				rows: 1,
				rtl: !1,
				slide: "",
				slidesPerRow: 1,
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 500,
				swipe: !0,
				swipeToSlide: !1,
				touchMove: !0,
				touchThreshold: 5,
				useCSS: !0,
				useTransform: !1,
				variableWidth: !1,
				vertical: !1,
				verticalSwiping: !1,
				waitForAnimate: !0,
				zIndex: 1e3
			}, e.initials = {
				animating: !1,
				dragging: !1,
				autoPlayTimer: null,
				currentDirection: 0,
				currentLeft: null,
				currentSlide: 0,
				direction: 1,
				$dots: null,
				listWidth: null,
				listHeight: null,
				loadIndex: 0,
				$nextArrow: null,
				$prevArrow: null,
				slideCount: null,
				slideWidth: null,
				$slideTrack: null,
				$slides: null,
				sliding: !1,
				slideOffset: 0,
				swipeLeft: null,
				$list: null,
				touchObject: {},
				transformsEnabled: !1,
				unslicked: !1
			}, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.hidden = "hidden", e.paused = !1, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, f, d), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0), e.checkResponsive(!0)
		}
		var b = 0;
		return c
	}(), b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) {
		var e = this;
		if ("boolean" == typeof c) d = c, c = null;
		else if (0 > c || c >= e.slideCount) return !1;
		e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function (b, c) {
			a(c).attr("data-slick-index", b)
		}), e.$slidesCache = e.$slides, e.reinit()
	}, b.prototype.animateHeight = function () {
		var a = this;
		if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
			var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
			a.$list.animate({
				height: b
			}, a.options.speed)
		}
	}, b.prototype.animateSlide = function (b, c) {
		var d = {},
			e = this;
		e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
			left: b
		}, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
			top: b
		}, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
			animStart: e.currentLeft
		}).animate({
			animStart: b
		}, {
			duration: e.options.speed,
			easing: e.options.easing,
			step: function (a) {
				a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
			},
			complete: function () {
				c && c.call()
			}
		})) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function () {
			e.disableTransition(), c.call()
		}, e.options.speed))
	}, b.prototype.asNavFor = function (b) {
		var c = this,
			d = c.options.asNavFor;
		d && null !== d && (d = a(d).not(c.$slider)), null !== d && "object" == typeof d && d.each(function () {
			var c = a(this).slick("getSlick");
			c.unslicked || c.slideHandler(b, !0)
		})
	}, b.prototype.applyTransition = function (a) {
		var b = this,
			c = {};
		b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
	}, b.prototype.autoPlay = function () {
		var a = this;
		a.autoPlayTimer && clearInterval(a.autoPlayTimer), a.slideCount > a.options.slidesToShow && a.paused !== !0 && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
	}, b.prototype.autoPlayClear = function () {
		var a = this;
		a.autoPlayTimer && clearInterval(a.autoPlayTimer)
	}, b.prototype.autoPlayIterator = function () {
		var a = this;
		a.options.infinite === !1 ? 1 === a.direction ? (a.currentSlide + 1 === a.slideCount - 1 && (a.direction = 0), a.slideHandler(a.currentSlide + a.options.slidesToScroll)) : (a.currentSlide - 1 === 0 && (a.direction = 1), a.slideHandler(a.currentSlide - a.options.slidesToScroll)) : a.slideHandler(a.currentSlide + a.options.slidesToScroll)
	}, b.prototype.buildArrows = function () {
		var b = this;
		b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
			"aria-disabled": "true",
			tabindex: "-1"
		}))
	}, b.prototype.buildDots = function () {
		var c, d, b = this;
		if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
			for (d = '<ul class="' + b.options.dotsClass + '">', c = 0; c <= b.getDotCount(); c += 1) d += "<li>" + b.options.customPaging.call(this, b, c) + "</li>";
			d += "</ul>", b.$dots = a(d).appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
		}
	}, b.prototype.buildOut = function () {
		var b = this;
		b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function (b, c) {
			a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
		}), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
	}, b.prototype.buildRows = function () {
		var b, c, d, e, f, g, h, a = this;
		if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
			for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
				var i = document.createElement("div");
				for (c = 0; c < a.options.rows; c++) {
					var j = document.createElement("div");
					for (d = 0; d < a.options.slidesPerRow; d++) {
						var k = b * h + (c * a.options.slidesPerRow + d);
						g.get(k) && j.appendChild(g.get(k))
					}
					i.appendChild(j)
				}
				e.appendChild(i)
			}
			a.$slider.html(e), a.$slider.children().children().children().css({
				width: 100 / a.options.slidesPerRow + "%",
				display: "inline-block"
			})
		}
	}, b.prototype.checkResponsive = function (b, c) {
		var e, f, g, d = this,
			h = !1,
			i = d.$slider.width(),
			j = window.innerWidth || a(window).width();
		if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
			f = null;
			for (e in d.breakpoints) d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
			null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h])
		}
	}, b.prototype.changeSlide = function (b, c) {
		var f, g, h, d = this,
			e = a(b.target);
		switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
			case "previous":
				g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
				break;
			case "next":
				g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
				break;
			case "index":
				var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
				d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");
				break;
			default:
				return
		}
	}, b.prototype.checkNavigable = function (a) {
		var c, d, b = this;
		if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];
		else
			for (var e in c) {
				if (a < c[e]) {
					a = d;
					break
				}
				d = c[e]
			}
		return a
	}, b.prototype.cleanUpEvents = function () {
		var b = this;
		b.options.dots && null !== b.$dots && (a("li", b.$dots).off("click.slick", b.changeSlide), b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).off("mouseenter.slick", a.proxy(b.setPaused, b, !0)).off("mouseleave.slick", a.proxy(b.setPaused, b, !1))), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.$list.off("mouseenter.slick", a.proxy(b.setPaused, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.setPaused, b, !1)), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
	}, b.prototype.cleanUpRows = function () {
		var b, a = this;
		a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.html(b))
	}, b.prototype.clickHandler = function (a) {
		var b = this;
		b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
	}, b.prototype.destroy = function (b) {
		var c = this;
		c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
			a(this).attr("style", a(this).data("originalStyling"))
		}), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
	}, b.prototype.disableTransition = function (a) {
		var b = this,
			c = {};
		c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
	}, b.prototype.fadeSlide = function (a, b) {
		var c = this;
		c.cssTransitions === !1 ? (c.$slides.eq(a).css({
			zIndex: c.options.zIndex
		}), c.$slides.eq(a).animate({
			opacity: 1
		}, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
			opacity: 1,
			zIndex: c.options.zIndex
		}), b && setTimeout(function () {
			c.disableTransition(a), b.call()
		}, c.options.speed))
	}, b.prototype.fadeSlideOut = function (a) {
		var b = this;
		b.cssTransitions === !1 ? b.$slides.eq(a).animate({
			opacity: 0,
			zIndex: b.options.zIndex - 2
		}, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
			opacity: 0,
			zIndex: b.options.zIndex - 2
		}))
	}, b.prototype.filterSlides = b.prototype.slickFilter = function (a) {
		var b = this;
		null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
	}, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
		var a = this;
		return a.currentSlide
	}, b.prototype.getDotCount = function () {
		var a = this,
			b = 0,
			c = 0,
			d = 0;
		if (a.options.infinite === !0)
			for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
		else if (a.options.centerMode === !0) d = a.slideCount;
		else
			for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
		return d - 1
	}, b.prototype.getLeft = function (a) {
		var c, d, f, b = this,
			e = 0;
		return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c
	}, b.prototype.getOption = b.prototype.slickGetOption = function (a) {
		var b = this;
		return b.options[a]
	}, b.prototype.getNavigableIndexes = function () {
		var e, a = this,
			b = 0,
			c = 0,
			d = [];
		for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
		return d
	}, b.prototype.getSlick = function () {
		return this
	}, b.prototype.getSlideCount = function () {
		var c, d, e, b = this;
		return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function (c, f) {
			return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0
		}), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll
	}, b.prototype.goTo = b.prototype.slickGoTo = function (a, b) {
		var c = this;
		c.changeSlide({
			data: {
				message: "index",
				index: parseInt(a)
			}
		}, b)
	}, b.prototype.init = function (b) {
		var c = this;
		a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA()
	}, b.prototype.initArrowEvents = function () {
		var a = this;
		a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.on("click.slick", {
			message: "previous"
		}, a.changeSlide), a.$nextArrow.on("click.slick", {
			message: "next"
		}, a.changeSlide))
	}, b.prototype.initDotEvents = function () {
		var b = this;
		b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
			message: "index"
		}, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.setPaused, b, !0)).on("mouseleave.slick", a.proxy(b.setPaused, b, !1))
	}, b.prototype.initializeEvents = function () {
		var b = this;
		b.initArrowEvents(), b.initDotEvents(), b.$list.on("touchstart.slick mousedown.slick", {
			action: "start"
		}, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
			action: "move"
		}, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
			action: "end"
		}, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
			action: "end"
		}, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.$list.on("mouseenter.slick", a.proxy(b.setPaused, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.setPaused, b, !1)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
	}, b.prototype.initUI = function () {
		var a = this;
		a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show(), a.options.autoplay === !0 && a.autoPlay()
	}, b.prototype.keyHandler = function (a) {
		var b = this;
		a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
			data: {
				message: "previous"
			}
		}) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
			data: {
				message: "next"
			}
		}))
	}, b.prototype.lazyLoad = function () {
		function g(b) {
			a("img[data-lazy]", b).each(function () {
				var b = a(this),
					c = a(this).attr("data-lazy"),
					d = document.createElement("img");
				d.onload = function () {
					b.animate({
						opacity: 0
					}, 100, function () {
						b.attr("src", c).animate({
							opacity: 1
						}, 200, function () {
							b.removeAttr("data-lazy").removeClass("slick-loading")
						})
					})
				}, d.src = c
			})
		}
		var c, d, e, f, b = this;
		b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = e + b.options.slidesToShow, b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d))
	}, b.prototype.loadSlider = function () {
		var a = this;
		a.setPosition(), a.$slideTrack.css({
			opacity: 1
		}), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
	}, b.prototype.next = b.prototype.slickNext = function () {
		var a = this;
		a.changeSlide({
			data: {
				message: "next"
			}
		})
	}, b.prototype.orientationChange = function () {
		var a = this;
		a.checkResponsive(), a.setPosition()
	}, b.prototype.pause = b.prototype.slickPause = function () {
		var a = this;
		a.autoPlayClear(), a.paused = !0
	}, b.prototype.play = b.prototype.slickPlay = function () {
		var a = this;
		a.paused = !1, a.autoPlay()
	}, b.prototype.postSlide = function (a) {
		var b = this;
		b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay === !0 && b.paused === !1 && b.autoPlay(), b.options.accessibility === !0 && b.initADA()
	}, b.prototype.prev = b.prototype.slickPrev = function () {
		var a = this;
		a.changeSlide({
			data: {
				message: "previous"
			}
		})
	}, b.prototype.preventDefault = function (a) {
		a.preventDefault()
	}, b.prototype.progressiveLazyLoad = function () {
		var c, d, b = this;
		c = a("img[data-lazy]", b.$slider).length, c > 0 && (d = a("img[data-lazy]", b.$slider).first(), d.attr("src", null), d.attr("src", d.attr("data-lazy")).removeClass("slick-loading").load(function () {
			d.removeAttr("data-lazy"), b.progressiveLazyLoad(), b.options.adaptiveHeight === !0 && b.setPosition()
		}).error(function () {
			d.removeAttr("data-lazy"), b.progressiveLazyLoad()
		}))
	}, b.prototype.refresh = function (b) {
		var d, e, c = this;
		e = c.slideCount - c.options.slidesToShow, c.options.infinite || (c.slideCount <= c.options.slidesToShow ? c.currentSlide = 0 : c.currentSlide > e && (c.currentSlide = e)), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, {
			currentSlide: d
		}), c.init(), b || c.changeSlide({
			data: {
				message: "index",
				index: d
			}
		}, !1)
	}, b.prototype.registerBreakpoints = function () {
		var c, d, e, b = this,
			f = b.options.responsive || null;
		if ("array" === a.type(f) && f.length) {
			b.respondTo = b.options.respondTo || "window";
			for (c in f)
				if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
					for (; e >= 0;) b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
					b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings
				}
			b.breakpoints.sort(function (a, c) {
				return b.options.mobileFirst ? a - c : c - a
			})
		}
	}, b.prototype.reinit = function () {
		var b = this;
		b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses(0), b.setPosition(), b.$slider.trigger("reInit", [b]), b.options.autoplay === !0 && b.focusHandler()
	}, b.prototype.resize = function () {
		var b = this;
		a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function () {
			b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
		}, 50))
	}, b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) {
		var d = this;
		return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())
	}, b.prototype.setCSS = function (a) {
		var d, e, b = this,
			c = {};
		b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)))
	}, b.prototype.setDimensions = function () {
		var a = this;
		a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
			padding: "0px " + a.options.centerPadding
		}) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
			padding: a.options.centerPadding + " 0px"
		})), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
		var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
		a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
	}, b.prototype.setFade = function () {
		var c, b = this;
		b.$slides.each(function (d, e) {
			c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({
				position: "relative",
				right: c,
				top: 0,
				zIndex: b.options.zIndex - 2,
				opacity: 0
			}) : a(e).css({
				position: "relative",
				left: c,
				top: 0,
				zIndex: b.options.zIndex - 2,
				opacity: 0
			})
		}), b.$slides.eq(b.currentSlide).css({
			zIndex: b.options.zIndex - 1,
			opacity: 1
		})
	}, b.prototype.setHeight = function () {
		var a = this;
		if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
			var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
			a.$list.css("height", b)
		}
	}, b.prototype.setOption = b.prototype.slickSetOption = function (b, c, d) {
		var f, g, e = this;
		if ("responsive" === b && "array" === a.type(c))
			for (g in c)
				if ("array" !== a.type(e.options.responsive)) e.options.responsive = [c[g]];
				else {
					for (f = e.options.responsive.length - 1; f >= 0;) e.options.responsive[f].breakpoint === c[g].breakpoint && e.options.responsive.splice(f, 1), f--;
					e.options.responsive.push(c[g])
				}
		else e.options[b] = c;
		d === !0 && (e.unload(), e.reinit())
	}, b.prototype.setPosition = function () {
		var a = this;
		a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
	}, b.prototype.setProps = function () {
		var a = this,
			b = document.body.style;
		a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1
	}, b.prototype.setSlideClasses = function (a) {
		var c, d, e, f, b = this;
		d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad()
	}, b.prototype.setupInfinite = function () {
		var c, d, e, b = this;
		if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
			for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
			for (c = 0; e > c; c += 1) d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
			b.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
				a(this).attr("id", "")
			})
		}
	}, b.prototype.setPaused = function (a) {
		var b = this;
		b.options.autoplay === !0 && b.options.pauseOnHover === !0 && (b.paused = a, a ? b.autoPlayClear() : b.autoPlay())
	}, b.prototype.selectHandler = function (b) {
		var c = this,
			d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
			e = parseInt(d.attr("data-slick-index"));
		return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e)
	}, b.prototype.slideHandler = function (a, b, c) {
		var d, e, f, g, h = null,
			i = this;
		return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
			i.postSlide(d);
		}) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
			i.postSlide(d)
		}) : i.postSlide(d))) : (i.options.autoplay === !0 && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function () {
			i.postSlide(e)
		})) : i.postSlide(e), void i.animateHeight()) : void(c !== !0 ? i.animateSlide(h, function () {
			i.postSlide(e)
		}) : i.postSlide(e))))
	}, b.prototype.startLoad = function () {
		var a = this;
		a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
	}, b.prototype.swipeDirection = function () {
		var a, b, c, d, e = this;
		return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "left" : "right" : "vertical"
	}, b.prototype.swipeEnd = function (a) {
		var c, b = this;
		if (b.dragging = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;
		if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) switch (b.swipeDirection()) {
			case "left":
				c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.slideHandler(c), b.currentDirection = 0, b.touchObject = {}, b.$slider.trigger("swipe", [b, "left"]);
				break;
			case "right":
				c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.slideHandler(c), b.currentDirection = 1, b.touchObject = {}, b.$slider.trigger("swipe", [b, "right"])
		} else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})
	}, b.prototype.swipeHandler = function (a) {
		var b = this;
		if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
			case "start":
				b.swipeStart(a);
				break;
			case "move":
				b.swipeMove(a);
				break;
			case "end":
				b.swipeEnd(a)
		}
	}, b.prototype.swipeMove = function (a) {
		var d, e, f, g, h, b = this;
		return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0)
	}, b.prototype.swipeStart = function (a) {
		var c, b = this;
		return 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void(b.dragging = !0))
	}, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
		var a = this;
		null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
	}, b.prototype.unload = function () {
		var b = this;
		a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
	}, b.prototype.unslick = function (a) {
		var b = this;
		b.$slider.trigger("unslick", [b, a]), b.destroy()
	}, b.prototype.updateArrows = function () {
		var b, a = this;
		b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
	}, b.prototype.updateDots = function () {
		var a = this;
		null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
	}, b.prototype.visibility = function () {
		var a = this;
		document[a.hidden] ? (a.paused = !0, a.autoPlayClear()) : a.options.autoplay === !0 && (a.paused = !1, a.autoPlay())
	}, b.prototype.initADA = function () {
		var b = this;
		b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
			"aria-hidden": "true",
			tabindex: "-1"
		}).find("a, input, button, select").attr({
			tabindex: "-1"
		}), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
			a(this).attr({
				role: "option",
				"aria-describedby": "slick-slide" + b.instanceUid + c
			})
		}), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function (c) {
			a(this).attr({
				role: "presentation",
				"aria-selected": "false",
				"aria-controls": "navigation" + b.instanceUid + c,
				id: "slick-slide" + b.instanceUid + c
			})
		}).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()
	}, b.prototype.activateADA = function () {
		var a = this;
		a.$slideTrack.find(".slick-active").attr({
			"aria-hidden": "false"
		}).find("a, input, button, select").attr({
			tabindex: "0"
		})
	}, b.prototype.focusHandler = function () {
		var b = this;
		b.$slider.on("focus.slick blur.slick", "*", function (c) {
			c.stopImmediatePropagation();
			var d = a(this);
			setTimeout(function () {
				b.isPlay && (d.is(":focus") ? (b.autoPlayClear(), b.paused = !0) : (b.paused = !1, b.autoPlay()))
			}, 0)
		})
	}, a.fn.slick = function () {
		var f, g, a = this,
			c = arguments[0],
			d = Array.prototype.slice.call(arguments, 1),
			e = a.length;
		for (f = 0; e > f; f++)
			if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
		return a
	}
});