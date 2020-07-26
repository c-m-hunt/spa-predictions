import {
    assertEquals,
} from "https://deno.land/std/testing/asserts.ts";

import { getResult } from './../app.ts';

Deno.test("getResult works", () => {
    assertEquals("D", getResult(3,3))
    assertEquals("A", getResult(0,3))
    assertEquals("H", getResult(3,0))
})