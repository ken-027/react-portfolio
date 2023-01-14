import { ScrollbarPlugin } from 'smooth-scrollbar'

export class ModalPlugin extends ScrollbarPlugin {
	static pluginName = 'modal'

	static defaultOptions = {
		open: false,
	}

	transformDelta(delta: any) {
		return this.options.open ? { x: 0, y: 0 } : delta
	}
}

export class AnchorPlugin extends ScrollbarPlugin {
	static pluginName = 'anchor'

	onHashChange = () => {
		this.jumpToHash(window.location.hash)
	}

	onClick = (event: any) => {
		const { target } = event

		if (target.tagName !== 'A') {
			return
		}

		const hash = target.getAttribute('href')

		if (!hash || hash.charAt(0) !== '#') {
			return
		}

		this.jumpToHash(hash)
	}

	jumpToHash = (hash: any) => {
		const { scrollbar } = this

		if (!hash) {
			return
		}

		// reset scrollTop
		scrollbar.containerEl.scrollTop = 0

		scrollbar.scrollIntoView(document.querySelector(hash))
	}

	onInit() {
		this.jumpToHash(window.location.hash)

		window.addEventListener('hashchange', this.onHashChange)

		this.scrollbar.contentEl.addEventListener('click', this.onClick)
	}

	onDestory() {
		window.removeEventListener('hashchange', this.onHashChange)

		this.scrollbar.contentEl.removeEventListener('click', this.onClick)
	}
}