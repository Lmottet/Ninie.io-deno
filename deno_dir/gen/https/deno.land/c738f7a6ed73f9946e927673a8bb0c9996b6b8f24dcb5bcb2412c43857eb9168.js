import { chooseRandom } from "./utils.ts";
export class Collection extends Map {
    set(key, value) {
        if (this.maxSize || this.maxSize === 0) {
            if (this.size >= this.maxSize)
                return this;
        }
        return super.set(key, value);
    }
    array() {
        return [...this.values()];
    }
    first() {
        return this.values().next().value;
    }
    last() {
        return [...this.values()][this.size - 1];
    }
    random() {
        return chooseRandom([...this.values()]);
    }
    find(callback) {
        for (const key of this.keys()) {
            const value = this.get(key);
            if (callback(value, key))
                return value;
        }
        return;
    }
    filter(callback) {
        const relevant = new Collection();
        this.forEach((value, key) => {
            if (callback(value, key))
                relevant.set(key, value);
        });
        return relevant;
    }
    map(callback) {
        const results = [];
        for (const key of this.keys()) {
            const value = this.get(key);
            results.push(callback(value, key));
        }
        return results;
    }
    some(callback) {
        for (const key of this.keys()) {
            const value = this.get(key);
            if (callback(value, key))
                return true;
        }
        return false;
    }
    every(callback) {
        for (const key of this.keys()) {
            const value = this.get(key);
            if (!callback(value, key))
                return false;
        }
        return true;
    }
    reduce(callback, initialValue) {
        let accumulator = initialValue;
        for (const key of this.keys()) {
            const value = this.get(key);
            accumulator = callback(accumulator, value, key);
        }
        return accumulator;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbGxlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFlBQVksQ0FBQztBQUUxQyxNQUFNLE9BQU8sVUFBaUIsU0FBUSxHQUFTO0lBRzdDLEdBQUcsQ0FBQyxHQUFNLEVBQUUsS0FBUTtRQUVsQixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxDQUFDLEVBQUU7WUFDdEMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPO2dCQUFFLE9BQU8sSUFBSSxDQUFDO1NBQzVDO1FBRUQsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsS0FBSztRQUNILE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxLQUFLO1FBQ0gsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxJQUFJO1FBQ0YsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsTUFBTTtRQUNKLE9BQU8sWUFBWSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxJQUFJLENBQUMsUUFBdUM7UUFDMUMsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDN0IsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUUsQ0FBQztZQUM3QixJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO2dCQUFFLE9BQU8sS0FBSyxDQUFDO1NBQ3hDO1FBRUQsT0FBTztJQUNULENBQUM7SUFFRCxNQUFNLENBQUMsUUFBdUM7UUFDNUMsTUFBTSxRQUFRLEdBQUcsSUFBSSxVQUFVLEVBQVEsQ0FBQztRQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQzFCLElBQUksUUFBUSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7Z0JBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQsR0FBRyxDQUFJLFFBQWlDO1FBQ3RDLE1BQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNuQixLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUM3QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBRSxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3BDO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELElBQUksQ0FBQyxRQUF1QztRQUMxQyxLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUM3QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBRSxDQUFDO1lBQzdCLElBQUksUUFBUSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7Z0JBQUUsT0FBTyxJQUFJLENBQUM7U0FDdkM7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxLQUFLLENBQUMsUUFBdUM7UUFDM0MsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDN0IsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7Z0JBQUUsT0FBTyxLQUFLLENBQUM7U0FDekM7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxNQUFNLENBQ0osUUFBaUQsRUFDakQsWUFBZ0I7UUFFaEIsSUFBSSxXQUFXLEdBQU0sWUFBYSxDQUFDO1FBRW5DLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzdCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFFLENBQUM7WUFDN0IsV0FBVyxHQUFHLFFBQVEsQ0FBQyxXQUFXLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ2pEO1FBRUQsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztDQUNGIn0=