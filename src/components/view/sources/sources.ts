import { ISources, Source, SourceSelectors } from '../../../types';
import './sources.css';

class Sources implements ISources {
    draw(data: ReadonlyArray<Source>): void {
        const fragment = document.createDocumentFragment();

        const sourceItemTemp = document.querySelector<HTMLTemplateElement>(SourceSelectors.Template);
        const container = document.querySelector<HTMLElement>(SourceSelectors.Container);

        if (!sourceItemTemp || !container) return;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            const itemName = sourceClone.querySelector<HTMLElement>(SourceSelectors.ItemName);
            if (itemName) {
                itemName.textContent = item.name;
            }
            const sourceItem = sourceClone.querySelector<HTMLElement>(SourceSelectors.Item);
            if (sourceItem) {
                sourceItem.setAttribute('data-source-id', item.id);
            }
            fragment.append(sourceClone);
        });

        container.append(fragment);
    }
}

export default Sources;
